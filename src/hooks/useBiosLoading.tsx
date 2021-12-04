import { useDispatch, useSelector } from 'react-redux'

import { changeBiosLoadingStatus } from '../store/system/actions'
import { selectSystem } from '../store/system/selectors'

export function useBiosLoading() {
  const { isBiosLoaded } = useSelector(selectSystem)
  const dispatch = useDispatch()

  return {
    isBiosLoaded,
    setBiosIsLoaded: () => dispatch(changeBiosLoadingStatus(true)),
  }
}
