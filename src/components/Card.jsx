import React from 'react';

function Card({ rune }) {
    return (
        <div className="card front">
            <div className={`rune ${rune}`}></div>
            <h3>{rune}</h3>
        </div>
    );
}

export default Card;
