import React, { useState, useEffect } from 'react';
import Card from './Card';
import runesData from '../data/RunesData';

function Game() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const scoreElement = document.querySelector('.score');
    const runes = runesData;
    const numCards = 8;

    const [score, setScore] = useState(0);
    const [description, setDescription] = useState('---');
    const [areCardsHidden, setAreCardsHidden] = useState(false);

    useEffect(() => {
        if (scoreElement) scoreElement.textContent = score;
    }, [score, scoreElement]);

    const generateRandomRunes = () => {
        const randomIds = new Set();
        while (randomIds.size < numCards) {
            const randomNumber = Math.floor(Math.random() * numCards);
            randomIds.add(randomNumber);
        }
        return Array.from(randomIds).map((id) => runes[id]);
    };

    const [cardSubset, setCardSubset] = useState(generateRandomRunes());
    const [comparisonArray, setComparisonArray] = useState([]);

    const compareNumberToArray = (int) => {
        return comparisonArray.includes(int);
    };

    const detectDuplicate = async (id) => {
        if (compareNumberToArray(id)) {
            // game over
            console.log('GAMEOVER', comparisonArray);
        } else {
            setComparisonArray([...comparisonArray, id]);
            console.log('continue game', comparisonArray);
            setAreCardsHidden(true);
            console.log(id);
            await delay(800);
            setCardSubset(generateRandomRunes());
            setAreCardsHidden(false);
        }
    };

    const handleCardClick = (id) => {
        console.log(runes[id].name, runes[id].meaning);
        setScore((prevScore) => prevScore + 1);
        setDescription(`${runes[id].name} - ${runes[id].description}`);
        if (scoreElement) scoreElement.textContent = score;
        detectDuplicate(id);
    };

    return (
        <main>
            <div className="score-board">
                <p className="score"></p>
                <p className="high-score"></p>
            </div>
            <div className="game">
                <div className="cards">
                    {cardSubset.map((rune, index) => (
                        <Card
                            key={rune.id}
                            rune={rune.meaning}
                            futhark={rune.name}
                            hidden={areCardsHidden}
                            click={(e) => handleCardClick(rune.id - 1)}
                        />
                    ))}
                </div>
            </div>
            <p>{description}</p>
        </main>
    );
}

export default Game;
