import React, { useState, useEffect } from 'react';
import Card from './Card';
import runesData from '../data/RunesData';

function Game() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const runes = runesData;

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [description, setDescription] = useState('---');
    const [comparisonArray, setComparisonArray] = useState([]);
    const [numCards, setNumCards] = useState(3);
    const [hideCards, setHideCards] = useState(false);
    const [levelClicks, setLevelClicks] = useState(0);

    const generateRandomRunes = () => {
        const randomIds = new Set();
        while (randomIds.size < numCards) {
            const randomNumber = Math.floor(Math.random() * numCards);
            randomIds.add(randomNumber);
        }
        return Array.from(randomIds).map((id) => runes[id]);
    };

    const cardSubset = generateRandomRunes();

    const writeHighScore = (score) => (score >= highScore ? setHighScore(score + 1) : null);
    const compareNumberToArray = (id) => comparisonArray.includes(id);

    const handleCardClick = async (id) => {
        setHideCards(true);
        setDescription(`${runes[id].name} - ${runes[id].description}`);
        setLevelClicks((prevClicks) => prevClicks + 1);
        if (compareNumberToArray(id)) {
            resetGame(); // Game over
        } else {
            setComparisonArray([...comparisonArray, id]); // Continue playing
        }
        await delay(1000);
        setScore((prevScore) => prevScore + 1);
        writeHighScore(score);
        setHideCards(false);
    };

    useEffect(() => {
        if (levelClicks === numCards) {
            setNumCards((prevCards) => prevCards + 1);
            setLevelClicks(0);
            setComparisonArray([]);
        }
        console.log('CONTINUE ?', levelClicks, numCards, comparisonArray);
    }, [levelClicks, numCards, comparisonArray]);

    const resetGame = () => {
        setScore(0);
        setNumCards(3);
        setLevelClicks(0);
        setComparisonArray([]);
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
                            hidden={hideCards}
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
