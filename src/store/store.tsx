import { combineReducers, createStore } from 'redux'

import { applicationReducer } from './application/reducer'

const rootReducer = combineReducers({
  application: applicationReducer,
})

export const store = createStore(rootReducer)

export type StoreState = ReturnType<typeof rootReducer>
