import React from 'react'

import './_card.scss'

function Card(){

    return (
        <div className="card">
            <div className="card__header">
                <h2>Feb 24, 2021</h2>
                <span>+</span>
            </div>
            <h3 className="card__subheader">Breakfast</h3>
            <div className="card__list">
                <ul>
                    <li>Adobo</li>
                </ul>
            </div>
        </div>
    )
}


export default Card