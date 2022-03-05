import { useDispatch, useSelector } from 'react-redux'

import { changeVolume } from '../store/system/actions'
import { selectSystem } from '../store/system/selectors'

export function useVolume() {
  const system = useSelector(selectSystem)
  const dispatch = useDispatch()

  return {
    volume: system.volume,
    setVolume: (volume: number) => dispatch(changeVolume(volume)),
  }
}
