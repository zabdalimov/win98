import {
  ApplicationAction,
  CHANGE_APPLICATION_FOCUS,
  CLOSE_APPLICATION,
  OPEN_APPLICATION,
} from './actions'
import { ApplicationType } from './ApplicationType'

export interface Application {
  applicationType: ApplicationType
  isFocused: boolean
}

interface ApplicationState {
  openedApplications: Application[]
}

const initialState: ApplicationState = {
  openedApplications: [],
}

export function applicationReducer(
  state = initialState,
  action: ApplicationAction
): ApplicationState {
  switch (action.type) {
    case OPEN_APPLICATION:
      // Unfocus other apps except given one
      const openedApplications = state.openedApplications.map((a) => ({
        ...a,
        isFocused: a.applicationType.name === action.applicationType.name,
      }))

      // Do not open given app 2nd time in case it's opened
      const isOpened = !!state.openedApplications.find(
        (a) => a.applicationType.name === action.applicationType.name
      )
      const appsToOpen: Application[] = !isOpened
        ? [
            {
              applicationType: action.applicationType,
              isFocused: true,
            },
          ]
        : []

      return {
        ...state,
        openedApplications: [...openedApplications, ...appsToOpen],
      }

    case CLOSE_APPLICATION:
      // TODO focus last application
      return {
        ...state,
        openedApplications: state.openedApplications.filter(
          (a) => a.applicationType.name !== action.applicationName
        ),
      }

    case CHANGE_APPLICATION_FOCUS:
      return {
        ...state,
        openedApplications: state.openedApplications.map((a) => ({
          ...a,
          isFocused:
            a.applicationType.name === action.applicationName
              ? action.isFocused
              : false,
        })),
      }

    default:
      return state
  }
}
