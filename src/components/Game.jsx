import React from 'react';
import Card from './Card';

function Game() {
    return (
        <main>
            <div className="game">
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="score-board">
                <p className="score">2</p>
                <p>
                    Symbolizes strength, vitality, and courage, signifying inner power and
                    determination.
                </p>
                <p className="high-score">100</p>
            </div>
        </main>
    );
}

export default Game;
