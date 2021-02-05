import React, { useState, useReducer } from "react";
import {initialState, reducer} from './reducer/reducer';
import './App.css';

import List from './components/List';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <List state={state}/>
    </div>
  );
}

export default App;
