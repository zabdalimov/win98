import { ApplicationType } from './ApplicationType'

export const OPEN_APPLICATION = 'application/OPEN'
export const CLOSE_APPLICATION = 'application/CLOSE'
export const CHANGE_APPLICATION_FOCUS = 'application/CHANGE_FOCUS'

interface OpenApplicationAction {
  type: typeof OPEN_APPLICATION
  applicationType: ApplicationType
  isBackdropShown?: boolean
}

interface CloseApplicationAction {
  type: typeof CLOSE_APPLICATION
  applicationName: string
  isBackdropShown?: boolean
}

interface ChangeApplicationFocusAction {
  type: typeof CHANGE_APPLICATION_FOCUS
  applicationName: string
  isFocused: boolean
}

export const openApplication = (
  applicationType: ApplicationType,
  isBackdropShown?: boolean
): OpenApplicationAction => ({
  type: OPEN_APPLICATION,
  applicationType,
  isBackdropShown,
})

export const closeApplication = (
  applicationName: string,
  isBackdropShown?: boolean
): CloseApplicationAction => ({
  type: CLOSE_APPLICATION,
  applicationName,
  isBackdropShown,
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
