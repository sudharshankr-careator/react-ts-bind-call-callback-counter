import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Call from './call'
import Bind from './bind';
import Callback from './callback';

function App() {
  return (
    <div>
      <Callback/>
      <Bind />
      <Call />
      <Hello />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

render(<App />, document.getElementById('root'));
