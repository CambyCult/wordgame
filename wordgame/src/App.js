import React, { useState } from 'react';
import Board from './Pages/Board.js';

import './Stylesheets/App.css';

function App() {
    const [grid, setGrid] = useState(
      [
        ['A', 'B', 'C', 'D'],
        ['E', 'F', 'G', 'H'],
        ['I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P']
    ]
    );
    const [highlightedCells, setHighlightedCells] = useState([]);

    const onCellClick = (row, col) => {
      // First, check if the cell is already in the highlightedCells array
      const cellExists = highlightedCells.some(cell => cell.row === row && cell.col === col);
  
      // If not, add it
      if (!cellExists) {
          setHighlightedCells(prevCells => [...prevCells, { row, col }]);
      } 
      // If it exists and is the last in the list, remove it (deselect on clicking twice)
      else if(JSON.stringify(highlightedCells[highlightedCells.length - 1]) === JSON.stringify({ row, col })) {
          setHighlightedCells(prevCells => prevCells.slice(0, -1));
      }
  };

    return (
        <Board 
            grid={grid} 
            onCellClick={onCellClick} 
            highlightedCells={highlightedCells} 
        />
    );
}

export default App;
