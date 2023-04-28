import React from 'react';

function Card({ rune, hidden }) {
    const isHidden = hidden && 'hidden';
    return (
        <div className={`card ${isHidden ? 'back' : 'front'}`}>
            <div className={`rune ${rune} ${isHidden}`} />
            <h3 className={isHidden}>{rune}</h3>
        </div>
    );
}

export default Card;
