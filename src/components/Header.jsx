import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <div className="line"></div>
                <div className="odin"></div>
                <div className="line"></div>
            </div>
            <h1>Runes Memory</h1>
            <p>
                Unlock the secrets of Odin's Runes <br />
                and become a master of magic!
            </p>
        </header>
    );
}

export default Header;
