import React, { useState } from 'react';
import './Like.css';

function LikesCounter() {
  const [count, setCount] = useState(0);

  const countIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
  if(count < 0) {
    setCount(0);
  } 
  return (
    <div className="like">
      <button
        type="button-like"
        onClick={countIncrement}
      >
        👍
      </button>
      &nbsp;
      {count}
      <p />
      <button
        type="button-like"
        onClick={countDecrement}
      >
        👎
      </button>
    </div>
  );
}

export default LikesCounter;
