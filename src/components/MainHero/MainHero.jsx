import React from 'react';
import "./MainHero.css";

const MainHero = () => {
    return (
        <div className="MainHero">
            <h4 className="header">Feature Books</h4>
            <div className="cards-container">
                {[].map(card => {
                    return(
                        <div className="card">
                            <h3>{card.title}</h3>
                            <img src={card.image} alt="books" />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MainHero;
