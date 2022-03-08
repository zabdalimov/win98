import styled from '@emotion/styled'
import React, { FormEvent, useState } from 'react'

import { useApplications } from '../../hooks/useApplications'
import { useRestart } from '../../hooks/useRestart'
import { useShutDown } from '../../hooks/useShutDown'
import shutDownFullIcon from '../../static/icons/shut-down-full-icon.png'
import { ApplicationType } from '../../store/application/ApplicationType'
import Button from '../Button/Button'
import { ButtonStyled } from '../Button/Button.styles'
import Icon from '../Icon/Icon'
import { RadioButton, RadioButtonStyled } from '../RadioButton/RadioButton'

const ShutDownApplicationContainer = styled.div`
  width: 300px;

  display: flex;

  padding: 0.75rem;
`

const IconContainer = styled.div`
  margin-right: 0.75rem;
`

const Title = styled.span`
  margin-bottom: 16px;
`

const OptionsContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  > ${RadioButtonStyled} {
    margin-bottom: 8px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  margin-top: 42px;

  > ${ButtonStyled} {
    min-width: 80px;
    min-height: 24px;

    &:not(:first-of-type) {
      margin-left: 6px;
    }
  }
`

enum ShutDownOption {
  SHUT_DOWN = 'SHUT_DOWN',
  RESTART = 'RESTART',
}

export const ShutDownApplication: React.FC = () => {
  const [chosenOption, setChosenOption] = useState<ShutDownOption>(
    ShutDownOption.SHUT_DOWN
  )

  const { shutDown } = useShutDown()
  const { restart } = useRestart()

  const { closeApplication } = useApplications()

  const closeShutDownApplication = () => {
    closeApplication(ApplicationType.ShutDown.name)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (chosenOption === ShutDownOption.SHUT_DOWN) {
      shutDown()
    } else if (chosenOption === ShutDownOption.RESTART) {
      restart()
    } else {
      console.error('Unknown shutdown option', chosenOption)
    }
    closeShutDownApplication()
  }

  return (
    <ShutDownApplicationContainer>
      <IconContainer>
        <Icon src={shutDownFullIcon} alt={'Shut Down...'} />
      </IconContainer>
      <OptionsContainer onSubmit={onSubmit}>
        <Title>Are you sure you want to:</Title>
        <RadioButton
          id={'shut-down-radio'}
          name={'shut-down-option'}
          value={'shut-down'}
          checked={chosenOption === ShutDownOption.SHUT_DOWN}
          onChange={(checked) => {
            checked && setChosenOption(ShutDownOption.SHUT_DOWN)
          }}
          autoFocus
        >
          Shut down the computer?
        </RadioButton>
        <RadioButton
          id={'restart-radio'}
          name={'shut-down-option'}
          value={'restart'}
          checked={chosenOption === ShutDownOption.RESTART}
          onChange={(checked) => {
            checked && setChosenOption(ShutDownOption.RESTART)
          }}
        >
          Restart the computer?
        </RadioButton>
        <ButtonsContainer>
          <Button alignContent={'center'} enableSubmit>
            Yes
          </Button>
          <Button alignContent={'center'} onClick={closeShutDownApplication}>
            No
          </Button>
        </ButtonsContainer>
      </OptionsContainer>
    </ShutDownApplicationContainer>
  )
}
