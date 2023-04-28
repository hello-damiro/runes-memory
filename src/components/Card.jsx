import React, { useState } from 'react';

function Card({ rune, hidden, click }) {
    const isHidden = hidden && 'hidden';
    const [rotationAngle, setRotationAngle] = useState(0);
    const handleMouseEnter = () => {
        const randomAngle = Math.floor(Math.random() * 11) - 5;
        setRotationAngle(randomAngle);
    };
    const handleMouseLeave = () => {
        const randomAngle = Math.floor(Math.random() * 11) - 5;
        setRotationAngle(randomAngle);
    };

    return (
        <div
            className={`card ${isHidden ? 'back' : 'front'}`}
            style={{ transform: `rotate(${rotationAngle}deg)` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={click}>
            <div className={`rune ${rune} ${isHidden}`} />
            <h3 className={isHidden}>{rune}</h3>
        </div>
    );
}

export default Card;
