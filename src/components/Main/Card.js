import React from 'react'

import './_card.scss'

function Card(props){

    return (
        <div className="card">
            <div className="card__header">
                <h2>{props.startDate}</h2>
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