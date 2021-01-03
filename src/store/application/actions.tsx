import { Application } from './reducer'

export const OPEN_APPLICATION = 'application/OPEN'
export const CLOSE_APPLICATION = 'application/CLOSE'

interface OpenApplicationAction {
  type: typeof OPEN_APPLICATION
  application: Application
}

interface CloseApplicationAction {
  type: typeof CLOSE_APPLICATION
  applicationName: string
}

export const openApplication = (
  application: Application
): OpenApplicationAction => ({
  type: OPEN_APPLICATION,
  application: application,
})

export const closeApplication = (
  applicationName: string
): CloseApplicationAction => ({
  type: CLOSE_APPLICATION,
  applicationName: applicationName,
})

export type ApplicationAction = OpenApplicationAction | CloseApplicationAction
