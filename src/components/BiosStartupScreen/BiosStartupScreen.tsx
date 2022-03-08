import styled from '@emotion/styled'
import React, { useCallback, useEffect, useState } from 'react'

import { DEFAULT_VOLUME } from '../../audio'
import { useBiosLoading } from '../../hooks/useBiosLoading'
import { useBrowserInfo } from '../../hooks/useBrowserInfo'
import { useOnKeyDownOnce } from '../../hooks/useOnKeyDownOnce'
import { useSystemLoading } from '../../hooks/useSystemLoading'
import { useVolume } from '../../hooks/useVolume'
import energyStarBlueMan from '../../static/images/energy-star-blue-man.png'
import energyStarLogo from '../../static/images/energy-star-logo.png'
import { getEnvConfig } from '../../utils/getEnvConfig'
import { isNumber } from '../../utils/math'

import { BiosInfoEntry } from './BiosInfoEntry'
import { BiosInfoSection, BiosInfoSectionStyled } from './BiosInfoSection'

export const BiosStartupScreenStyled = styled.div`
  height: 100%;

  display: flex;

  background-color: ${({ theme }) => theme.colors.black};
`

const BiosInfoSections = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fontFamilies.dos};
  font-size: 26px;

  > ${BiosInfoSectionStyled} {
    margin-bottom: 26px;
  }

  > div:last-child {
    margin-top: auto;
    strong {
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
    }
  }
`

const BiosLink = styled.a`
  color: inherit;
`

const EnergyStarLogo = styled.img`
  margin-left: auto;
`

const FALLBACK_LABEL = 'Unknown'

const getStorageUsage = ({ usage, quota }: StorageEstimate) => {
  if (usage && quota) {
    const percentUsage = ((usage / quota) * 100).toFixed(4)
    return `${usage}B (${percentUsage}%)`
  } else if (usage) {
    return `${usage}B`
  } else {
    return FALLBACK_LABEL
  }
}

const LOAD_WITH_SOUND_KEY = 'Enter'
const LOAD_WITHOUT_SOUND_KEY = 'm'

export const BiosStartupScreen: React.FC = () => {
  const { projectUrl } = getEnvConfig()
  const browserInfo = useBrowserInfo()
  const { setIsBiosLoaded } = useBiosLoading()
  const { setIsSystemLoading } = useSystemLoading()
  const { setVolume } = useVolume()

  const [browserInfoLoadedValues, setBrowserInfoLoadedValues] = useState<
    { storageEstimate: StorageEstimate } | undefined
  >()

  useEffect(() => {
    ;(async () => {
      const storageEstimate = await browserInfo.storageEstimate
      setBrowserInfoLoadedValues({ storageEstimate })
    })()
  }, [browserInfo.storageEstimate])

  const loadBase = useCallback(() => {
    setIsBiosLoaded(true)
    setIsSystemLoading(true)
  }, [setIsBiosLoaded, setIsSystemLoading])

  const loadWithoutSound = useCallback(() => {
    setVolume(0)
    loadBase()
  }, [loadBase, setVolume])

  const loadWithSound = useCallback(() => {
    setVolume(DEFAULT_VOLUME)
    loadBase()
  }, [loadBase, setVolume])

  useOnKeyDownOnce(LOAD_WITH_SOUND_KEY, loadWithSound)
  useOnKeyDownOnce(LOAD_WITHOUT_SOUND_KEY, loadWithoutSound)

  // TODO add gradual loading of all info entries

  return (
    <BiosStartupScreenStyled>
      <BiosInfoSections>
        <BiosInfoSection>
          <tr>
            <td>
              <img src={energyStarBlueMan} alt="Energy Star Blue Man" />
            </td>
            <td>
              <BiosLink href={projectUrl} target="_blank" rel="noreferrer">
                {projectUrl}
              </BiosLink>
              <p>No License For Now (?) 2020-{new Date().getFullYear()}</p>
            </td>
          </tr>
        </BiosInfoSection>
        <BiosInfoSection>
          <BiosInfoEntry label="Platform" value={browserInfo.platform} />
          <BiosInfoEntry label="Agent" value={browserInfo.userAgent} />
          <BiosInfoEntry label="Vendor" value={browserInfo.vendor} />
        </BiosInfoSection>
        <BiosInfoSection>
          <BiosInfoEntry label="Cores" value={browserInfo.cores} />
          <BiosInfoEntry
            label="RAM"
            value={
              browserInfo.minimalRam
                ? `At Least ${browserInfo.minimalRam} GiB`
                : FALLBACK_LABEL
            }
          />
          {browserInfoLoadedValues?.storageEstimate && (
            <React.Fragment>
              <BiosInfoEntry
                label="Storage Quota"
                value={
                  browserInfoLoadedValues.storageEstimate.quota
                    ? `${browserInfoLoadedValues.storageEstimate.quota}B`
                    : FALLBACK_LABEL
                }
              />
              <BiosInfoEntry
                label="Storage Usage"
                value={getStorageUsage(browserInfoLoadedValues.storageEstimate)}
              />
            </React.Fragment>
          )}
        </BiosInfoSection>
        <BiosInfoSection>
          <BiosInfoEntry
            label="Bandwidth Estimated"
            value={
              isNumber(browserInfo.connection.downlink)
                ? `${browserInfo.connection.downlink}Mbps`
                : FALLBACK_LABEL
            }
          />
          <BiosInfoEntry
            label="Bandwidth Max"
            value={
              isNumber(browserInfo.connection.downlinkMax)
                ? `${browserInfo.connection.downlinkMax}Mbps`
                : FALLBACK_LABEL
            }
          />
          <BiosInfoEntry
            label="Ping"
            value={
              isNumber(browserInfo.connection.rtt)
                ? `${browserInfo.connection.rtt}ms`
                : FALLBACK_LABEL
            }
          />
          <BiosInfoEntry
            label="Connection Type"
            value={browserInfo.connection.type ?? FALLBACK_LABEL}
          />
          <BiosInfoEntry
            label="Connection Effective Type"
            value={browserInfo.connection.effectiveType ?? FALLBACK_LABEL}
          />
        </BiosInfoSection>
        <BiosInfoSection>
          <BiosInfoEntry
            label="Current Date Time"
            value={new Date().toLocaleString()}
          />
          <BiosInfoEntry
            label="Timezone"
            value={Intl.DateTimeFormat().resolvedOptions().timeZone}
          />
        </BiosInfoSection>
        <div>
          <p>
            Press <strong>{LOAD_WITH_SOUND_KEY}</strong> to startup WIN98.
          </p>
          <p>
            Press <strong>{LOAD_WITHOUT_SOUND_KEY}</strong> to do it without
            sound.
          </p>
        </div>
      </BiosInfoSections>
      <EnergyStarLogo
        src={energyStarLogo}
        alt="Energy Star Logo"
        width={266}
        height={168}
      />
    </BiosStartupScreenStyled>
  )
}
