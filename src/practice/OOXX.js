import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
import './OOXX.css';

function Square (props) {
  // const [value, setValue] = useState(null)

  return (
    <button
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

function Board (props) {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i) {
    const squ = squares.slice()
    if (calculateWinner(squ) || squ[i]) return
    squ[i] = xIsNext ? 'X' : 'O'
    setSquares(squ)
    setXIsNext(!xIsNext)
  }

  function renderSquare(i) {
    return (
      <Square 
        value={squares[i]}
        onClick={() => handleClick(i)}       
      />
    )
  }

  const winner = calculateWinner(squares)
  // const status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  let status = ''
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next players:' + (xIsNext ? 'X' : 'O')
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game (props){
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game