import { useDispatch } from 'react-redux'

import { resetState } from '../store/store'

export function useResetState() {
  const dispatch = useDispatch()

  return {
    resetState: () => dispatch(resetState()),
  }
}
