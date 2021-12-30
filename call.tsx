import React, { useState } from 'react';

function Call() {
  var person = {
    name: 'sudharshan',
    age: 23,
    disp: function () {
      return this.name + ' ' + this.age;
    },
  };

  function sudhar(mohan: any, revanth: any) {
    console.log(person.disp() + mohan + revanth);
  }

  return (
    <div>
      <button onClick={() => person.disp.call(person)}>call</button>
      <button onClick={() => sudhar.call(person, ' mohan', ' monish')}>
        call1
      </button>
    </div>
  );
}
export default Call;
