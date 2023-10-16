import React from 'react';

function RandomLetterGrid() {
const alphabet = [
    { letter: 'A', weight: 9 },
    { letter: 'B', weight: 2 },
    { letter: 'C', weight: 2 },
    { letter: 'D', weight: 4 },
    { letter: 'E', weight: 12 },
    { letter: 'F', weight: 2 },
    { letter: 'G', weight: 3 },
    { letter: 'H', weight: 2 },
    { letter: 'I', weight: 9 },
    { letter: 'J', weight: 1 },
    { letter: 'K', weight: 1 },
    { letter: 'L', weight: 4 },
    { letter: 'M', weight: 2 },
    { letter: 'N', weight: 6 },
    { letter: 'O', weight: 8 },
    { letter: 'P', weight: 2 },
    { letter: 'Q', weight: 1 },
    { letter: 'R', weight: 6 },
    { letter: 'S', weight: 4 },
    { letter: 'T', weight: 6 },
    { letter: 'U', weight: 4 },
    { letter: 'V', weight: 2 },
    { letter: 'W', weight: 2 },
    { letter: 'X', weight: 1 },
    { letter: 'Y', weight: 2 },
    { letter: 'Z', weight: 1 },
];

function RandomLetter(){
    let weightedAlphabet = [];
    alphabet.forEach(item => {
        for (let i = 0; i < item.weight; i++) {
            weightedAlphabet.push(item.letter);
        }
    });

    const randomIndex = Math.floor(Math.random() * weightedAlphabet.length);
    return weightedAlphabet[randomIndex];
}

function generateRandomGrid(){
    const grid = [];
    for (let i = 0; i < 4; i++) {
        let row = [];
        for (let i = 0; i < 4; i++) {
            row.push(RandomLetter());
        } 
        grid.push(row);
    }
    return grid;
}

return (
    <div>
        
    </div>
);
}