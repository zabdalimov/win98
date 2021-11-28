import { combineReducers, createStore } from 'redux'

import { applicationReducer } from './application/reducer'
import { systemReducer } from './system/reducer'

const rootReducer = combineReducers({
  application: applicationReducer,
  system: systemReducer,
})

export const store = createStore(rootReducer)

export type StoreState = ReturnType<typeof rootReducer>
