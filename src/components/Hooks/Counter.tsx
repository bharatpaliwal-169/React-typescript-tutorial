import {useReducer} from 'react'

type CounterState={
  count: number
}
type CounterAction={
  type: string
  payload: number
}
const initialState = {
  count : 0
}

function reducer(state:CounterState,action:CounterAction){
  switch(action.type){
    case 'increment':
      return {count: state.count + action.payload}
    case 'decrement':
      return {count: state.count - action.payload}
    default:
      return state;
  }
}
export const Counter = () => {
  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
      <h1>Counter</h1>
      Count : {state.count}
      <button onClick={() => dispatch({type: 'increment', payload: 10})}>
        INC
      </button>
      <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
        DEC
      </button>
    </>
  )
}
