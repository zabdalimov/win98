import styled from '@emotion/styled'
import React from 'react'

import helpIcon from '../../static/icons/help-book-icon.png'
import { getEnvConfig } from '../../utils/getEnvConfig'
import Icon from '../Icon/Icon'

const AboutApplicationContainer = styled.div`
  display: flex;

  padding: 0.75rem;
`

const IconContainer = styled.div`
  margin-right: 0.75rem;
`

const InfoTable = styled.table``
const InfoTableBody = styled.tbody``
const InfoTableRow = styled.tr``
const InfoTableCell = styled.td`
  min-width: 80px;
`

export const AboutApplication: React.FC = () => {
  const { packageVersion, commitHash, projectUrl } = getEnvConfig()

  return (
    <AboutApplicationContainer>
      <IconContainer>
        <Icon src={helpIcon} alt={'About'} />
      </IconContainer>
      <InfoTable>
        <InfoTableBody>
          <InfoTableRow>
            <InfoTableCell>Version:</InfoTableCell>
            <InfoTableCell>
              v{packageVersion}#{commitHash}
            </InfoTableCell>
          </InfoTableRow>
          <InfoTableRow>
            <InfoTableCell>Repository:</InfoTableCell>
            <InfoTableCell>
              <a href={projectUrl} target="_blank" rel="noreferrer">
                {projectUrl}
              </a>
            </InfoTableCell>
          </InfoTableRow>
        </InfoTableBody>
      </InfoTable>
    </AboutApplicationContainer>
  )
}
