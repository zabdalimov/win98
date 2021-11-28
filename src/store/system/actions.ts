export const CHANGE_BIOS_LOADING_STATUS = 'system/CHANGE_BIOS_LOADING_STATUS'
export const CHANGE_WINDOWS_LOADING_STATUS =
  'system/CHANGE_WINDOWS_LOADING_STATUS'

export interface ChangeBiosLoadingStatus {
  type: typeof CHANGE_BIOS_LOADING_STATUS
  loadingStatus: boolean
}

export interface ChangeWindowsLoadingStatus {
  type: typeof CHANGE_WINDOWS_LOADING_STATUS
  loadingStatus: boolean
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

export type SystemAction = ChangeBiosLoadingStatus | ChangeWindowsLoadingStatus
