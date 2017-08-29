import React from 'react';

const BoardTile = (props) => {

  return(
    <div className="board-cell">
      {props.value}
    </div>
  )

}

export default BoardTile;
