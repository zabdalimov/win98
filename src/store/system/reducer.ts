import { getEnvConfig } from '../../utils/env'

import {
  CHANGE_BIOS_LOADING_STATUS,
  CHANGE_WINDOWS_LOADING_STATUS,
  SystemAction,
} from './actions'

export interface SystemState {
  isBiosLoaded: boolean
  isWindowsLoaded: boolean
}

const initialState: SystemState = {
  isBiosLoaded: getEnvConfig().isDevelopment,
  isWindowsLoaded: getEnvConfig().isDevelopment,
}

export function systemReducer(
  state = initialState,
  action: SystemAction
): SystemState {
  switch (action.type) {
    case CHANGE_BIOS_LOADING_STATUS:
      return {
        ...state,
        isBiosLoaded: action.loadingStatus,
      }
    case CHANGE_WINDOWS_LOADING_STATUS:
      return {
        ...state,
        isWindowsLoaded: action.loadingStatus,
      }
    default:
      return state
  }
}
