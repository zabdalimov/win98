import { useDispatch, useSelector } from 'react-redux'

import {
  changeApplicationFocus,
  closeApplication,
  openApplication,
} from '../store/application/actions'
import { ApplicationType } from '../store/application/ApplicationType'
import { selectOpenedApplications } from '../store/application/selectors'

export function useApplications() {
  const applications = useSelector(selectOpenedApplications)
  const dispatch = useDispatch()
  return {
    applications,
    openApplication: (applicationType: ApplicationType) =>
      dispatch(openApplication(applicationType)),
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
