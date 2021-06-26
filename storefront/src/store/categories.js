// Initial state
const initialState = {
  count: 0
}
// Reducer function

export default function reducer(state = initialState, action) {

  const { type, payload } = action

  switch (type) {
    case 'INITIALIZE':
      return {count: parseInt(payload, 10)}

    case 'INCREMENT':
      return {...state, count: state.count + 1}
      
    case 'DECREMENT':
      return {...state, count: state.count - 1}

    default:
      return state
  }

}

// Actions

export const INITIALIZE = number => {
  return {
    type: 'INITIALIZE',
    payload: number
  }
}

export const INCREMENT = () => {
  return {
    type: 'INCREMENT',
  }
}

export const DECREMENT = () => {
  return {
    type: 'DECREMENT',
  }
}