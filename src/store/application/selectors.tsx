import { StoreState } from '../store'

export const selectOpenedApplications = (state: StoreState) =>
  state.application.openedApplications

export const selectIsBackdropShown = (state: StoreState) =>
  state.application.isBackdropShown
