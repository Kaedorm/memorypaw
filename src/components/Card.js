import React from 'react';
import './Card.css';

export default function Card({card, handleChoice}) {
    const handleClick= () =>{
        handleChoice(card)
    }

  return (
    <div className="card-display" >
        <div>
            <img className='front' src={card.src} alt= "front of the card" />
            <img className='back' src='/image/pawpatrol.png' onClick={handleClick} alt='back of the card' />
        </div>
    </div>
  )
}
