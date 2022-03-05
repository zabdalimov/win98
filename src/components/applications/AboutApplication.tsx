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

export const AboutApplication: React.FC = () => {
  const { packageVersion, commitHash, projectUrl } = getEnvConfig()

  return (
    <AboutApplicationContainer>
      <IconContainer>
        <Icon src={helpIcon} alt={'About'} />
      </IconContainer>
      <table>
        <tbody>
          <tr>
            <td>Version:</td>
            <td>
              v{packageVersion}#{commitHash}
            </td>
          </tr>
          <tr>
            <td>Project URL:</td>
            <td>
              <a href={projectUrl} target="_blank" rel="noreferrer">
                {projectUrl}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </AboutApplicationContainer>
  )
}
