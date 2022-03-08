import { useDispatch, useSelector } from 'react-redux'

import {
  changeApplicationFocus,
  closeApplication,
  openApplication,
} from '../store/application/actions'
import { ApplicationType } from '../store/application/ApplicationType'
import {
  selectIsBackdropShown,
  selectOpenedApplications,
} from '../store/application/selectors'

export function useApplications() {
  const applications = useSelector(selectOpenedApplications)
  const isBackdropShown = useSelector(selectIsBackdropShown)

  const dispatch = useDispatch()

  return {
    applications,
    isBackdropShown,
    openApplication: (
      applicationType: ApplicationType,
      isBackdropShown?: boolean
    ) => dispatch(openApplication(applicationType, isBackdropShown)),
    closeApplication: (applicationName: string) =>
      dispatch(closeApplication(applicationName)),
    focusApplication: (applicationName: string) =>
      dispatch(changeApplicationFocus(applicationName, true)),
    unfocusApplication: (applicationName: string) =>
      dispatch(changeApplicationFocus(applicationName, false)),
    changeApplicationFocus: (applicationName: string, isFocused: boolean) =>
      dispatch(changeApplicationFocus(applicationName, isFocused)),
  }
}
