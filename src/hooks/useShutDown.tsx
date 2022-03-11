import { useDispatch, useSelector } from 'react-redux'

import { changeIsShutDown } from '../store/system/actions'
import { selectSystem } from '../store/system/selectors'

import { useAudio } from './useAudio'
import { useSystemLoading } from './useSystemLoading'

export function useShutDown() {
  const { isShutDown } = useSelector(selectSystem)
  const { setIsSystemLoading } = useSystemLoading()

  const { playAudio } = useAudio()

  const dispatch = useDispatch()

  const shutDown = () => {
    setIsSystemLoading(true)
    playAudio('shutdown.mp3')
    setTimeout(() => {
      dispatch(changeIsShutDown(true))
      setIsSystemLoading(false)
    }, 4500)
  }

  return {
    isShutDown,
    shutDown,
  }
}
