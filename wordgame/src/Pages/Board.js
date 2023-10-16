// Board.js
import React from 'react';
import Cell from './Cell.js';

import '../Stylesheets/Board.css';

const Board = ({ grid, onCellClick, highlightedCells }) => {
  console.log(grid);
    return (
        <div className="board">
            {grid.map((row, rowIndex) => (
                row.map((letter, colIndex) => (
                    <Cell 
                        key={`${rowIndex}-${colIndex}`}
                        letter={letter}
                        onClick={() => onCellClick(rowIndex, colIndex)}
                        isHighlighted={highlightedCells.some(cell => cell.row === rowIndex && cell.col === colIndex)}
                    />
                ))
            ))}
        </div>
    );
};

export default Board;