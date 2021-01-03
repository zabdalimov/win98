import { StoreState } from '../store'

export const selectOpenedApplications = (state: StoreState) =>
  state.application.openedApplications
