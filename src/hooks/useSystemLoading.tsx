import { useDispatch, useSelector } from 'react-redux'

import { changeIsSystemLoading } from '../store/system/actions'
import { selectSystem } from '../store/system/selectors'

export function useSystemLoading() {
  const { isSystemLoading } = useSelector(selectSystem)

  const dispatch = useDispatch()

  return {
    isSystemLoading,
    setIsSystemLoading: (isSystemLoading: boolean) => {
      dispatch(changeIsSystemLoading(isSystemLoading))
    },
  }
}
