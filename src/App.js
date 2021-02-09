import React, { useState, useReducer } from "react";
import {initialState, reducer} from './reducer/reducer';
import './App.css';

import List from './components/List';
import Form from './components/Form';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <List state={state} dispatch={dispatch}/>
      <Form dispatch={dispatch}/>
    </div>
  );
}

export default App;
