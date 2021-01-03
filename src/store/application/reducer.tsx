import {
  ApplicationAction,
  CLOSE_APPLICATION,
  FOCUS_APPLICATION,
  OPEN_APPLICATION,
} from './actions'
import React from 'react'

export interface Application {
  name: string
  contents: React.ReactElement
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
      const app = state.openedApplications.find(
        (a) => a.name === action.application.name
      )
      return {
        ...state,
        openedApplications: [
          ...state.openedApplications,
          ...(!app ? [action.application] : []),
        ],
      }

    case CLOSE_APPLICATION:
      // TODO focus last application
      return {
        ...state,
        openedApplications: state.openedApplications.filter(
          (a) => a.name !== action.applicationName
        ),
      }

    case FOCUS_APPLICATION:
      return {
        ...state,
        openedApplications: state.openedApplications.map((a) => ({
          ...a,
          isFocused: a.name === action.applicationName,
        })),
      }

    default:
      return state
  }
}
