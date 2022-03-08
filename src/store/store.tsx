import { combineReducers, createStore } from 'redux'

import { applicationReducer } from './application/reducer'
import { systemReducer } from './system/reducer'

const RESET_STATE = 'RESET_STATE'

interface ResetState {
  type: typeof RESET_STATE
}

export const resetState = (): ResetState => ({ type: RESET_STATE })

const appReducer = combineReducers({
  application: applicationReducer,
  system: systemReducer,
})

const rootReducer = (
  state: Parameters<typeof appReducer>[0],
  action: Parameters<typeof appReducer>[1] | ResetState
) => {
  if (action.type === RESET_STATE) {
    // TODO
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export const store = createStore(rootReducer)

export type StoreState = ReturnType<typeof rootReducer>
