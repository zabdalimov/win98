import { useDispatch, useSelector } from 'react-redux'

import { changeIsShutDown } from '../store/system/actions'
import { selectSystem } from '../store/system/selectors'

export function useShutDown() {
  const { isShutDown } = useSelector(selectSystem)
  const dispatch = useDispatch()

  const shutDown = () => {
    dispatch(changeIsShutDown(true))
  }

  return {
    isShutDown,
    shutDown,
  }
}
