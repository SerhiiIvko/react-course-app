import React, { useState } from 'react';

function LikesCounter() {
  const [count, setCount] = useState(0);

  const countIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div className="like">
      <button
        type="button"
        onClick={countIncrement}
      >
        👍
      </button>
      &nbsp;
      {count}
      <p />
      <button
        type="button"
        onClick={countDecrement}
      >
        👎
      </button>
    </div>
  );
}

export default LikesCounter;
