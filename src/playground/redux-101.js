import { createStore } from 'redux'

// Action Generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = () => (state = { count: 0 }, action) => {
  switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.incrementBy
        }
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        }
      case 'SET':
        return {
          count: action.count
        }
      case 'RESET':
        return {
          count: 0
        }
        default:
          return state
  }
}

const store = createStore(countReducer)


// store.subscribe() watches for state changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Actions - objects that get sent to the store

// Increment x2

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

// Reset
store.dispatch(resetCount())

// Decrement
store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))