import { createStore } from 'redux'
import RootReducer from '../reducers/root_reducer'

export const store = (preloadedState={}) => {
  return createStore(RootReducer, preloadedState)
}
