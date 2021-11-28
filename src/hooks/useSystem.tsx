import { useDispatch, useSelector } from 'react-redux'

import {
  changeBiosLoadingStatus,
  changeWindowsLoadingStatus,
} from '../store/system/actions'
import { selectSystem } from '../store/system/selectors'

export function useSystem() {
  const system = useSelector(selectSystem)
  const dispatch = useDispatch()

  return {
    ...system,
    setBiosIsLoaded: () => dispatch(changeBiosLoadingStatus(true)),
    setWindowsIsLoaded: () => dispatch(changeWindowsLoadingStatus(true)),
  }
}
