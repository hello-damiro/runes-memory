import React, { useState } from 'react';
import Card from './Card';
import runesData from '../data/RunesData';

function Game() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const runes = runesData;

    const [numCards] = useState(3);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [description, setDescription] = useState('---');
    const [areCardsHidden, setAreCardsHidden] = useState(false);
    const [comparisonArray, setComparisonArray] = useState([]);

    const generateRandomRunes = () => {
        const randomIds = new Set();
        while (randomIds.size < numCards) {
            const randomNumber = Math.floor(Math.random() * numCards);
            randomIds.add(randomNumber);
        }
        return Array.from(randomIds).map((id) => runes[id]);
    };

    const [cardSubset, setCardSubset] = useState(generateRandomRunes());

    const compareNumberToArray = (int) => {
        return comparisonArray.includes(int);
    };

    const detectDuplicate = async (id) => {
        setAreCardsHidden(true);
        if (compareNumberToArray(id)) {
            // game over
            console.log('GAMEOVER', comparisonArray);
            writeHighScore(score);
            await delay(3000);
            resetGame();
        } else {
            writeHighScore(score);
            setComparisonArray([...comparisonArray, id]);
            setScore((prevScore) => prevScore + 1);
            await delay(800);
            setCardSubset(generateRandomRunes());
            setAreCardsHidden(false);
        }
    };

    const writeHighScore = (score) => {
        if (score >= highScore) setHighScore(score);
    };

    const resetGame = () => {
        setScore(0);
    };

    const handleCardClick = (id) => {
        console.log(runes[id].name, runes[id].meaning);

        setDescription(`${runes[id].name} - ${runes[id].description}`);
        detectDuplicate(id);
    };

    return (
        <main>
            <div className="score-board">
                <p className="score">{score}</p>
                <p className="high-score">{highScore}</p>
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
