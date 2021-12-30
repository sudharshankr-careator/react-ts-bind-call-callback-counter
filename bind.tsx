import React from 'react';
export default function Bind() {
  var person = {
    name: 'sudharshan',
    age: 23,
    disp: function () {
      return this.name;
    },
  };
  function sudhar(mohan: any, revanth: any) {
    console.log(person.disp() + mohan + revanth);
  }
  var n = sudhar.bind(person);
  return (
    <div>
      <button onClick={n(' hi', ' bro')}>Bind</button>
    </div>
  );
}
