import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo">
                <div className="line"></div>
                <div className="odin"></div>
                <div className="line"></div>
            </div>
            <a href="/">
                <h1>Runes Memory</h1>
            </a>
            <p>
                Unlock the secrets of Odin's Runes <br />
                and become a master of magic!
            </p>
        </header>
    );
}

export default Header;
