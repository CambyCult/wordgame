import React from 'react';
import '../Stylesheets/Cell.css';

const Cell = ({ letter, onClick, isHighlighted }) => {
    return (
        <div 
            className={`cell ${isHighlighted ? 'highlighted' : ''}`}
            onClick={onClick}
        >
            {letter}
        </div>
    );
};

export default Cell;