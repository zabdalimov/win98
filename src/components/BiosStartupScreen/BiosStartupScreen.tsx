import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

import { useBrowserInfo } from '../../hooks/useBrowserInfo'
import { useOnKeyDownOnce } from '../../hooks/useOnKeyDownOnce'
import { useSystem } from '../../hooks/useSystem'
import energyStarLogo from '../../static/images/energy-star-logo.png'

export const BiosStartupScreenStyled = styled.div`
  height: 100%;

  display: flex;

  background-color: ${({ theme }) => theme.colors.black};
`

const BiosInfoSection = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fontFamilies.dos};
  font-size: 26px;

  > table {
    margin-bottom: 26px;
  }

  > p:last-child {
    margin-top: auto;
    > strong {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

const EnergyStarLogo = styled.img`
  margin-left: auto;
`

const BiosInfoEntryStyled = styled.tr`
  > td {
    vertical-align: top;
  }
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

const BiosInfoEntry: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => {
  return (
    <BiosInfoEntryStyled>
      <td>{label}</td>
      <td>:</td>
      <td>{value}</td>
    </BiosInfoEntryStyled>
  )
}

export const BiosStartupScreen: React.FC = () => {
  const browserInfo = useBrowserInfo()
  const { setBiosIsLoaded } = useSystem()

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
      <BiosInfoSection>
        <table>
          <tbody>
            <BiosInfoEntry label="Platform" value={browserInfo.platform} />
            <BiosInfoEntry label="Agent" value={browserInfo.userAgent} />
            <BiosInfoEntry label="Vendor" value={browserInfo.vendor} />
          </tbody>
        </table>
        <table>
          <tbody>
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
          </tbody>
        </table>
        <p>
          Press <strong>ENTER</strong> to load WIN98
        </p>
      </BiosInfoSection>
      <EnergyStarLogo
        src={energyStarLogo}
        alt="Energy Star Logo"
        width={266}
        height={168}
      />
    </BiosStartupScreenStyled>
  )
}
