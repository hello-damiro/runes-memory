import React, { useState, useEffect } from 'react';
import Card from './Card';
import runesData from '../data/RunesData';

function Game() {
    const runes = runesData;
    const [score, setScore] = useState(0);
    const scoreElement = document.querySelector('.score');

    useEffect(() => {
        if (scoreElement) scoreElement.textContent = score;
    }, [score, scoreElement]);

    const handleCardClick = () => {
        setScore((prevScore) => prevScore + 1);
        if (scoreElement) scoreElement.textContent = score;
        console.log('clicked');
    };

    return (
        <main>
            <div className="score-board">
                <p className="score"></p>
                <p className="high-score"></p>
            </div>
            <div className="game">
                <div className="cards">
                    {runes.map((rune, index) => (
                        <Card key={rune.id} rune={rune.meaning} click={handleCardClick} />
                    ))}
                </div>
            </div>
            <p>
                Symbolizes strength, vitality, and courage, signifying inner power and
                determination.
            </p>
        </main>
    );
}

export default Game;
