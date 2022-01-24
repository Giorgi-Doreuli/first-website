import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <>
            <div className = 'card' id = 'card'>
                <h1 className = 'text-center'> {props.label}</h1>
                <figure id = 'surati'>
                    <div className = 'wrapper'>
                    <img src={props.src} alt = {props.alt} class = 'img'/>
                    </div>
                    <figcaption> {props.area}</figcaption>
                </figure>
            </div>
        </>
    )
}

export default Card
