import { useState } from 'react';
import './App.css';

const images=[
  { "src": "/image/chase"},
  { "src": "/image/everest"},
  { "src": "/image/rocky"},
  { "src": "/image/rubble"},
  { "src": "/image/ryder"},
  { "src": "/image/skyes"},
  { "src": "/image/tracker"},
  { "src": "/image/zuma"},
]

function App() {
  const [cards, setcards] = useState([])
  const [moves, setMoves] = useState(0)

  // shuffle and duplicate cards
  const shuffleCards = ()=>{
    // duplicate all the cards
    const shuffledCards = [...images, ...images]
    // randomize them 
    .sort(()=>Math.random() -0.5)
    // giving each card an Id
    .map((card)=>({...card, id: Math.random()}))

    setcards(shuffledCards)
    setMoves(0)
  }

  console.log(cards, moves)
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
