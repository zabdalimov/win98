export const CHANGE_BIOS_LOADING_STATUS = 'system/CHANGE_BIOS_LOADING_STATUS'
export const CHANGE_WINDOWS_LOADING_STATUS =
  'system/CHANGE_WINDOWS_LOADING_STATUS'
export const CHANGE_VOLUME = 'system/CHANGE_VOLUME'

interface ChangeBiosLoadingStatus {
  type: typeof CHANGE_BIOS_LOADING_STATUS
  loadingStatus: boolean
}

interface ChangeWindowsLoadingStatus {
  type: typeof CHANGE_WINDOWS_LOADING_STATUS
  loadingStatus: boolean
}

interface ChangeVolume {
  type: typeof CHANGE_VOLUME
  volume: number
}

export const changeVolume = (volume: number): ChangeVolume => {
  return {
    type: CHANGE_VOLUME,
    volume,
  }
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

export type SystemAction =
  | ChangeBiosLoadingStatus
  | ChangeWindowsLoadingStatus
  | ChangeVolume
