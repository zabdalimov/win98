import { Application } from './reducer'

export const OPEN_APPLICATION = 'application/OPEN'
export const CLOSE_APPLICATION = 'application/CLOSE'
export const CHANGE_APPLICATION_FOCUS = 'application/CHANGE_FOCUS'

interface OpenApplicationAction {
  type: typeof OPEN_APPLICATION
  application: Application
}

interface CloseApplicationAction {
  type: typeof CLOSE_APPLICATION
  applicationName: string
}

interface ChangeApplicationFocusAction {
  type: typeof CHANGE_APPLICATION_FOCUS
  applicationName: string
  isFocused: boolean
}

export const openApplication = (
  application: Omit<Application, 'isFocused'>
): OpenApplicationAction => ({
  type: OPEN_APPLICATION,
  application: {
    ...application,
    isFocused: true,
  },
})

export const closeApplication = (
  applicationName: string
): CloseApplicationAction => ({
  type: CLOSE_APPLICATION,
  applicationName,
})

export const changeApplicationFocus = (
  applicationName: string,
  isFocused: boolean
): ChangeApplicationFocusAction => ({
  type: CHANGE_APPLICATION_FOCUS,
  applicationName,
  isFocused,
})

export type ApplicationAction =
  | OpenApplicationAction
  | CloseApplicationAction
  | ChangeApplicationFocusAction
