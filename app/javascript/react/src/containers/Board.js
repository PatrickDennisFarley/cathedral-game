import React from 'react';
import BoardTile from '../components/BoardTile';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: this.initializeBoard()
    }
    this.initializeBoard = this.initializeBoard.bind(this)
  }

  initializeBoard(){
    let newBoard = [];
    for (let i = 0; i < 10; i++) {
      newBoard.push(new Array(10).fill(0));
    }
    return newBoard;
  }

  render() {
    let flattenedBoard = [].concat.apply([], this.state.board);
    console.log(flattenedBoard)
    let boardDisplay = flattenedBoard.map((elementData, index) => {
      return (
        <BoardTile
          key={index}
          value={elementData}
        />
      )
    })
    return (
      <div className="board">
        {boardDisplay}
      </div>
    )
  }
}


export default Board
