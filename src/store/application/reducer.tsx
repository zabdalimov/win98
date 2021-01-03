import {
  ApplicationAction,
  CLOSE_APPLICATION,
  OPEN_APPLICATION,
} from './actions'
import React from 'react'

export interface Application {
  name: string
  contents: React.ReactElement
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
      if (app) {
        console.error(
          `Can't open application ${action.application.name}, already opened.`
        )
        return state
      }
      return {
        ...state,
        openedApplications: [...state.openedApplications, action.application],
      }

    case CLOSE_APPLICATION:
      return {
        ...state,
        openedApplications: state.openedApplications.filter(
          (a) => a.name !== action.applicationName
        ),
      }

    default:
      return state
  }
}
