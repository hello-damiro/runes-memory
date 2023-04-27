import React from 'react';
import Card from './Card';

function Game() {
    return (
        <main>
            <div className="score-board">
                <p className="score">SCORE: 2</p>
                <p>
                    Symbolizes strength, vitality, and courage, signifying inner power and
                    determination.
                </p>
                <p className="high-score">HIGH SCORE: 100</p>
            </div>
            <div className="game">
                <div className="cards">
                    <Card rune={'breakthrough'} />
                    <Card rune={'constraint'} />
                    <Card rune={'defense'} />
                    <Card rune={'disruption'} />
                    <Card rune={'fertility'} />
                    <Card rune={'flow'} />
                    <Card rune={'gateway'} />
                    <Card rune={'growth'} />
                    <Card rune={'harvest'} />
                    <Card rune={'initiation'} />
                    <Card rune={'journey'} />
                    <Card rune={'joy'} />
                    <Card rune={'movement'} />
                    <Card rune={'opening'} />
                    <Card rune={'partnership'} />
                    <Card rune={'possessions'} />
                    <Card rune={'protection'} />
                    <Card rune={'retreat'} />
                    <Card rune={'signals'} />
                    <Card rune={'standstill'} />
                    <Card rune={'strength'} />
                    <Card rune={'the-self'} />
                    <Card rune={'warrior'} />
                    <Card rune={'wholeness'} />
                </div>
            </div>
            <div></div>
        </main>
    );
}

export default Game;
