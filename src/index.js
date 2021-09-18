import React from 'react';
import ReactDOM from 'react-dom';
import Wikipedia from './Wikipedia';
import reportWebVitals from './reportWebVitals';
import Game from './practice/5sonChess';
// import Game from './practice/OOXX';

ReactDOM.render(
    <Wikipedia/>,
    // <Game/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
