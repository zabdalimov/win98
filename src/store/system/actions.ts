export const CHANGE_BIOS_LOADING_STATUS = 'system/CHANGE_BIOS_LOADING_STATUS'
export const CHANGE_WINDOWS_LOADING_STATUS =
  'system/CHANGE_WINDOWS_LOADING_STATUS'
export const CHANGE_IS_SHUT_DOWN = 'system/CHANGE_IS_SHUT_DOWN'
export const CHANGE_IS_SYSTEM_LOADING = 'system/CHANGE_IS_SYSTEM_LOADING'
export const CHANGE_VOLUME = 'system/CHANGE_VOLUME'

interface ChangeBiosLoadingStatus {
  type: typeof CHANGE_BIOS_LOADING_STATUS
  loadingStatus: boolean
}

interface ChangeWindowsLoadingStatus {
  type: typeof CHANGE_WINDOWS_LOADING_STATUS
  loadingStatus: boolean
}

interface ChangeIsShutDown {
  type: typeof CHANGE_IS_SHUT_DOWN
  isShutDown: boolean
}

interface ChangeIsSystemLoading {
  type: typeof CHANGE_IS_SYSTEM_LOADING
  isSystemLoading: boolean
}

interface ChangeVolume {
  type: typeof CHANGE_VOLUME
  volume: number
}

export const changeBiosLoadingStatus = (
  loadingStatus: boolean
): ChangeBiosLoadingStatus => {
  return {
    type: CHANGE_BIOS_LOADING_STATUS,
    loadingStatus,
  }
}

export const changeWindowsLoadingStatus = (
  loadingStatus: boolean
): ChangeWindowsLoadingStatus => ({
  type: CHANGE_WINDOWS_LOADING_STATUS,
  loadingStatus,
})

export const changeIsShutDown = (isShutDown: boolean): ChangeIsShutDown => {
  return {
    type: CHANGE_IS_SHUT_DOWN,
    isShutDown,
  }
}

export const changeIsSystemLoading = (
  isSystemLoading: boolean
): ChangeIsSystemLoading => {
  return {
    type: CHANGE_IS_SYSTEM_LOADING,
    isSystemLoading,
  }
}

export const changeVolume = (volume: number): ChangeVolume => {
  return {
    type: CHANGE_VOLUME,
    volume,
  }
}

export type SystemAction =
  | ChangeBiosLoadingStatus
  | ChangeWindowsLoadingStatus
  | ChangeIsShutDown
  | ChangeIsSystemLoading
  | ChangeVolume
