import { useDispatch, useSelector } from 'react-redux'

import { changeIsShutDown } from '../store/system/actions'
import { selectSystem } from '../store/system/selectors'

import { useSystemLoading } from './useSystemLoading'

export function useShutDown() {
  const { isShutDown } = useSelector(selectSystem)
  const { setIsSystemLoading } = useSystemLoading()

  const dispatch = useDispatch()

  const shutDown = () => {
    setIsSystemLoading(true)
    setTimeout(() => {
      dispatch(changeIsShutDown(true))
      setIsSystemLoading(false)
    }, 3000)
  }

  return {
    isShutDown,
    shutDown,
  }
}
