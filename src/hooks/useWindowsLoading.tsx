import { useDispatch, useSelector } from 'react-redux'

import { changeWindowsLoadingStatus } from '../store/system/actions'
import { selectSystem } from '../store/system/selectors'

export function useWindowsLoading() {
  const { isWindowsLoaded } = useSelector(selectSystem)
  const dispatch = useDispatch()

  return {
    isWindowsLoaded,
    setWindowsIsLoaded: () => dispatch(changeWindowsLoadingStatus(true)),
  }
}
