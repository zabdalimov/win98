import { getEnvConfig } from '../../utils/getEnvConfig'

import {
  CHANGE_BIOS_LOADING_STATUS,
  CHANGE_VOLUME,
  CHANGE_WINDOWS_LOADING_STATUS,
  SystemAction,
} from './actions'

export interface SystemState {
  isBiosLoaded: boolean
  isWindowsLoaded: boolean

  volume: number
}

const initialState: SystemState = {
  isBiosLoaded: getEnvConfig().isDevelopment,
  isWindowsLoaded: getEnvConfig().isDevelopment,
  volume: 0,
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
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.volume,
      }
    default:
      return state
  }
}
