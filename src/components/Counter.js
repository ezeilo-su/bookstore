import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncCountFunction } from '../actions/index';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  useEffect(() => {
    dispatch(asyncCountFunction());
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div>
      <h3>{`Count: ${count}`}</h3>
    </div>
  );
};

export default Counter;
