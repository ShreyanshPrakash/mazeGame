import React from 'react';

export function Cell({ isMario, isMashroom, cellIndex }) {

    if (isMario) {
        return (
            <div key={cellIndex} className="cell">
                <img src={process.env.PUBLIC_URL + '/mario.png'} width="40" height="40" alt="mushroom"></img>;
            </div>
        )
    } else if (isMashroom) {
        return (
            <div key={cellIndex} className="cell">
                <img src={process.env.PUBLIC_URL + '/sprite.png'} width="40" height="40" alt="mushroom"></img>;
            </div>
        )
    } else {
        return <div key={cellIndex} className="cell">0</div>;
    }
    
}