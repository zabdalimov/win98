import styled from '@emotion/styled'
import React from 'react'

import helpIcon from '../../static/icons/help-book-icon.png'
import { getEnvConfig } from '../../utils/env'
import Icon from '../Icon/Icon'

const AboutApplicationContainer = styled.div`
  display: flex;

  padding: 1rem;
`

const IconContainer = styled.div`
  margin-right: 1rem;
`

export const AboutApplication: React.FC = () => {
  const { commitHash, projectUrl } = getEnvConfig()

  return (
    <AboutApplicationContainer>
      <IconContainer>
        <Icon src={helpIcon} alt={'About'} />
      </IconContainer>
      <table>
        <tbody>
          <tr>
            <td>Project URL:</td>
            <td>
              <a href={projectUrl} target="_blank" rel="noreferrer">
                {projectUrl}
              </a>
            </td>
          </tr>
          <tr>
            <td>Commit Hash:</td>
            <td>{commitHash}</td>
          </tr>
        </tbody>
      </table>
    </AboutApplicationContainer>
  )
}
