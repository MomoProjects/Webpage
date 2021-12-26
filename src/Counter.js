import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  decrement,  increment,  selectCount,  incrementByAmount} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div >
        <button
          
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>

      </div>
    </div>
  );
}
