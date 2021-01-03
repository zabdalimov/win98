import { Application } from './reducer'

export const OPEN_APPLICATION = 'application/OPEN'
export const CLOSE_APPLICATION = 'application/CLOSE'
export const FOCUS_APPLICATION = 'application/FOCUS'

interface OpenApplicationAction {
  type: typeof OPEN_APPLICATION
  application: Application
}

interface CloseApplicationAction {
  type: typeof CLOSE_APPLICATION
  applicationName: string
}

interface FocusApplicationAction {
  type: typeof FOCUS_APPLICATION
  applicationName: string
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

export const focusApplication = (
  applicationName: string
): FocusApplicationAction => ({
  type: FOCUS_APPLICATION,
  applicationName,
})

export type ApplicationAction =
  | OpenApplicationAction
  | CloseApplicationAction
  | FocusApplicationAction
