import React from 'react';
export default function Callback() {
  function myCallbackfun() {
    console.log('i ma from my callback');
  }
  function test(a, b, nameCallback) {
    console.log(a, b);
    nameCallback();
  }

  function myCallbackfun1(sum) {
    console.log('i ma from my callback', sum);
  }
  function test1(a, b, nameCallback) {
    var sum = a + b;
    nameCallback(sum);
  }
  test(10, 20, myCallbackfun);

  return (
    <div>
      <button
        onClick={() => {
          test(10, 20, myCallbackfun);
        }}
      >
        Callback
      </button>
      <button
        onClick={() => {
          test(10, 20, myCallbackfun);
        }}
      >
        Callback1
      </button>
    </div>
  );
}
