import {
  useEffect,
  useState
} from 'react';
import './App.css';
import Card from './components/Card';

const images = [{
  "src": "/image/chase.png", matched: false
},
  {
    "src": "/image/everest.png", matched: false
  },
  {
    "src": "/image/rocky.png", matched: false
  },
  {
    "src": "/image/rubble.png", matched: false
  },
  {
    "src": "/image/ryder.png", matched: false
  },
  {
    "src": "/image/skyes.png", matched: false
  },
  {
    "src": "/image/tracker.png", matched: false
  },
  {
    "src": "/image/zuma.png", matched: false
  },
]

function App() {
  const [cards, setCards] = useState([])
  const [moves, setMoves] = useState(0)
  //player choices
  const [firstPick, setFirstPick] = useState(null)
  const [secondPick, setSecondPick] = useState(null)

  // shuffle and duplicate cards
  const shuffleCards = () => {
    // duplicate all the cards
    const shuffledCards = [...images, ...images]
      // randomize them 
      .sort(() => Math.random() - 0.5)
      // giving each card an Id
      .map((card) => ({
        ...card,
        id: Math.random()
      }))

    setCards(shuffledCards)
    setMoves(0)
  }

  //increase counter and reseting player choices
  const nextTurn = () => {
    setFirstPick(null)
    setSecondPick(null)
    setMoves(prevMoves => prevMoves + 1)
  }

  // compare the 2 picks
  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.src === secondPick.src) {
        setCards(prevCards =>{
          return prevCards.map(card => {
            if (card.src === firstPick.src) {
              return {...card, matched: true}
            } else{
              return card
            }
          })
        })
        nextTurn()
      } 
      else {
        setTimeout(()=>nextTurn(), 1000)
      }
    }
  }, [firstPick, secondPick])


  // handle the player's choice
  const handleChoice = (card) => {
    //ternary: if first pick is null, it will set firstPick, if not, it will set secondPick
    firstPick ? setSecondPick(card) : setFirstPick(card)
  }

  return ( <div className = "App" >
    <h1> Pat'Mémoire </h1>
    <button onClick = {shuffleCards}>New Game</button> 
    <div className = "card-grid"> {
      cards.map(card => (
          <Card 
            key = {card.id}
            card = {card}
            handleChoice = {handleChoice}
            flipped = {card === firstPick || card === secondPick || card.matched}
          />
      ))} 
    </div> 
  </div>
);}

export default App;