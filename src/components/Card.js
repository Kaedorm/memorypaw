import React from 'react';
import './Card.css';

export default function Card({card, handleChoice, flipped, disabled}) {
    const handleClick= () =>{
      if(!disabled){  
      handleChoice(card)
      }
    }
    
/* if flipped true apply css class flipped, if not, no CSS class */
  return (
    <div className="card-display" > 
        <div className= {flipped ? "flipped" :  ""}>
            <img className='front' src={card.src} alt= "front of the card" />
            <img className='back' src='/image/pawpatrol.png' onClick={handleClick} alt='back of the card' />
        </div>
    </div>
  )
}
 