import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, icrementByAmount } from '../counter/Counter'

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(icrementByAmount(5))}>+5</button>
    </div>
  )
}

export default Counter