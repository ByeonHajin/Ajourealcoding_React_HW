import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//import {sum as add, multiple} from './Math';
//import Math from './Math';
import Header from './components/Header';
import './App.css';
import RouterApp from './RouterApp';

function App() {
/*
const sum = 'SUM!';
console.log(sum);
console.log(add);
console.log(multiple);
*/
const cityName = 'Seoul';
  return (
  <BrowserRouter>
    <RouterApp />
  </BrowserRouter>
  );
}

export default App;
