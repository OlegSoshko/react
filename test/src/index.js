import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.js'
import './index.css';

class Game extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      history: [{squares: Array(9).fill(null), x: null, y: null}],
      nextStepX: true,      
      stepNumber: 0,
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    let x;
    let y
    if(calculateWinner(squares) || squares[i]){
      return
    }
    
    if(i < 3){
      x = i + 1;
      y = 1;
    } else if(i > 2 && i < 6){
      x = i - 2;
      y = 2;
    } else if(i > 5 && i < 9){
      x = i - 5;
      y = 3;
    }

    squares[i] = this.state.nextStepX ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        x: x,
        y: y,
      }]),  
      nextStepX: !this.state.nextStepX,
      stepNumber: history.length,
      stepPosition: i,
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      nextStepX: (step % 2) === 0,
    })
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares)
    const moves = history.map((step,move) => {
      const desc = move ? 
        'Перейти к ходу #' + move + '(x: ' + step.x + ', y: ' + step.y + ')' : 
        'К началу игры';
      return(
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if(winner){
      status = 'Выиграл ' + winner;
    } else{
      status = 'Следующий ход: ' + (this.state.nextStepX ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

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
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
