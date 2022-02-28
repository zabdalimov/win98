import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

import { useBiosLoading } from '../../hooks/useBiosLoading'
import { useBrowserInfo } from '../../hooks/useBrowserInfo'
import { useOnKeyDownOnce } from '../../hooks/useOnKeyDownOnce'
import energyStarBlueMan from '../../static/images/energy-star-blue-man.png'
import energyStarLogo from '../../static/images/energy-star-logo.png'
import { getEnvConfig } from '../../utils/env'
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

  > p:last-child {
    margin-top: auto;
    > strong {
      color: ${({ theme }) => theme.colors.white};
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

export const BiosStartupScreen: React.FC = () => {
  const { projectUrl } = getEnvConfig()
  const browserInfo = useBrowserInfo()
  const { setBiosIsLoaded } = useBiosLoading()

  const [loadedValues, setLoadedValues] = useState<
    { storageEstimate: StorageEstimate } | undefined
  >()

  useEffect(() => {
    ;(async () => {
      const storageEstimate = await browserInfo.storageEstimate
      setLoadedValues({ storageEstimate })
    })()
  }, [browserInfo.storageEstimate])

  useOnKeyDownOnce('Enter', setBiosIsLoaded)

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
          {loadedValues?.storageEstimate && (
            <React.Fragment>
              <BiosInfoEntry
                label="Storage Quota"
                value={
                  loadedValues.storageEstimate.quota
                    ? `${loadedValues.storageEstimate.quota}B`
                    : FALLBACK_LABEL
                }
              />
              <BiosInfoEntry
                label="Storage Usage"
                value={getStorageUsage(loadedValues.storageEstimate)}
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
        <p>
          Press <strong>ENTER</strong> to load WIN98
        </p>
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
