import React, { useState, useEffect } from 'react';
import Card from './Card';
import runesData from '../data/RunesData';

function Game() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const runes = runesData;

    const [numCards, setNumCards] = useState(24);
    const [hideCards, setHideCards] = useState(false);
    const [levelClicks, setLevelClicks] = useState(0);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [description, setDescription] = useState('---');
    const [comparisonArray, setComparisonArray] = useState([]);
    const [cover, setCover] = useState(false);
    const [curtainClass, setCurtainClass] = useState('curtain');
    const [levelClass, setLevelClass] = useState('level');
    const [level, setLevel] = useState(0);
    const [showLevel, setShowLevel] = useState(false);
    const [gameOn, setGameOn] = useState(false);
    const [playClass, setPlayClass] = useState('play-button');

    const startGame = () => {
        console.log('START GAME');
        setLevel(0);
        setNumCards(3);
        setGameOn(true);
    };

    const generateRandomRunes = () => {
        const randomIds = new Set();
        while (randomIds.size < numCards) {
            const randomNumber = Math.floor(Math.random() * numCards);
            randomIds.add(randomNumber);
        }
        return Array.from(randomIds).map((id) => runes[id]);
    };

    const cardSubset = generateRandomRunes();

    const compareNumberToArray = (id) => comparisonArray.includes(id);

    const handleCardClick = async (id) => {
        setHideCards(true);
        setCover((prevState) => !prevState);
        setDescription(`${runes[id].name} - ${runes[id].description}`);
        setLevelClicks((prevClicks) => prevClicks + 1);
        if (compareNumberToArray(id)) {
            await delay(1000);
            resetGame(); // Game over
        } else {
            setComparisonArray([...comparisonArray, id]); // Continue
            await delay(1000);
            setScore((prevScore) => prevScore + 1);
            if (score >= highScore) {
                setHighScore(score + 1);
            }
            console.log(levelClicks, numCards);
            if (levelClicks + 1 === numCards) {
                console.log('level', level);
                setShowLevel((prevState) => !prevState);
                setDescription('---');
                await delay(3000);
                setShowLevel((prevState) => !prevState);
            }
        }
        setCover((prevState) => !prevState);
        storeLocal(true);
        setHideCards(false);
    };

    const resetGame = () => {
        setScore(0);
        setNumCards(24);
        setLevelClicks(0);
        setLevel(0);
        setComparisonArray([]);
        setDescription('---');
        setGameOn(false);
    };

    const retrieveLocal = () => {
        return localStorage.getItem('runes-memory');
    };

    const storeLocal = (store) => {
        if (store) {
            localStorage.setItem('runes-memory', highScore);
        } else localStorage.removeItem('runes-memory');
    };

    useEffect(() => {
        // storeLocal(false); // delete local memory
        if (retrieveLocal() !== null) setHighScore(parseInt(retrieveLocal()));
        setLevel('up your Runes: Do not select a Rune twice.');
        // const levelDiv = document.querySelector('.level');
        // levelDiv.textContent = `Odin's Rule: Do not select a Rune twice.`;
    }, []);

    useEffect(() => {
        const cardsDiv = document.querySelector('.cards');
        const width = numCards > 8 ? 100 : (numCards * 100) / 8;
        cardsDiv.style.width = width + '%';

        if (gameOn) {
            if (cover) setCurtainClass('curtain');
            else setCurtainClass('curtain hidden');

            if (showLevel) setLevelClass('level');
            else setLevelClass('level hidden');

            if (gameOn) setPlayClass('play-button hidden');
            else setPlayClass('play-button');

            if (levelClicks === numCards) {
                if (numCards !== 24) setNumCards((prevCards) => prevCards + 1);
                setLevel((prevLevel) => prevLevel + 1);
                setLevelClicks(0);
                setComparisonArray([]);
            }
        }
    }, [levelClicks, numCards, comparisonArray, cover, highScore, score, showLevel, gameOn]);

    return (
        <main>
            <div className="options">
                <div className={playClass} onClick={startGame}>
                    <h4>Play</h4>
                </div>
                <div className="score-board">
                    <p className="score">{score}</p>
                    <p className="high-score">{highScore}</p>
                </div>
            </div>
            <div className="game">
                <div className="cards">
                    {cardSubset.map((rune) => (
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
            <div className={levelClass}>Level {level}</div>
            <div className={curtainClass}></div>
        </main>
    );
}

export default Game;
