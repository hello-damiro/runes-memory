import React, { useState } from 'react';

function Card({ rune, futhark, hidden, click }) {
    const runeClass = rune.toLowerCase();
    const isHidden = hidden ? 'hidden' : '';
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
            <div className={`rune ${runeClass} ${isHidden}`} />
            <h3 className={isHidden}>{futhark}</h3>
        </div>
    );
}

export default Card;
