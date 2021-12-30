import React, { useState } from 'react';
function Hello() {
  let [count, setCount] = useState(0);
  const increment = () => {
    if (count != 5) {
      setCount(count + 1);
    } else {
      return count;
    }
  };
  const decrement = () => {
    if (count != 0) {
      setCount(count - 1);
    } else {
      return count;
    }
  };
  return (
    <div>
      <button onClick={increment} disabled={count >= 5 ? true : false}>
        Increment
      </button>
      <h3>{count}</h3>
      <button onClick={decrement} disabled={count == 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
}
export default Hello;
