import {
  ApplicationAction,
  CHANGE_FOCUS_APPLICATION,
  CLOSE_APPLICATION,
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
      // Unfocus other apps except given one
      const openedApplications = state.openedApplications.map((a) => ({
        ...a,
        isFocused: a.name === action.application.name,
      }))

      // Do not open given app 2nd time in case it's opened
      const isOpened = !!state.openedApplications.find(
        (a) => a.name === action.application.name
      )
      const appsToOpen = !isOpened ? [action.application] : []

      return {
        ...state,
        openedApplications: [...openedApplications, ...appsToOpen],
      }

    case CLOSE_APPLICATION:
      // TODO focus last application
      return {
        ...state,
        openedApplications: state.openedApplications.filter(
          (a) => a.name !== action.applicationName
        ),
      }

    case CHANGE_FOCUS_APPLICATION:
      return {
        ...state,
        openedApplications: state.openedApplications.map((a) => ({
          ...a,
          isFocused:
            a.name === action.applicationName ? action.isFocused : false,
        })),
      }

    default:
      return state
  }
}
