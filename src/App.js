import {
  useEffect,
  useState
} from 'react';
import './App.css';
import Card from './components/Card';

const images = [{
    "src": "/image/chase.png"
  },
  {
    "src": "/image/everest.png"
  },
  {
    "src": "/image/rocky.png"
  },
  {
    "src": "/image/rubble.png"
  },
  {
    "src": "/image/ryder.png"
  },
  {
    "src": "/image/skyes.png"
  },
  {
    "src": "/image/tracker.png"
  },
  {
    "src": "/image/zuma.png"
  },
]

function App() {
  const [cards, setcards] = useState([])
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

    setcards(shuffledCards)
    setMoves(0)
  }

  //increasing counter and reseting player choices
  const nextTurn = () => {
    setFirstPick(null)
    setSecondPick(null)
    setMoves(prevMoves => prevMoves + 1)
  }

  // compare the 2 picks
  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.src === secondPick.src) {
        console.log("it's a match");
        nextTurn()
      } else {
        console.log("lost");
      }
    }
  }, [firstPick, secondPick])


// handle the player's choice
const handleChoice = (card) => {
  //ternary: if first pick is null, it will set firstPick, if not, it will set secondPick
  firstPick ? setSecondPick(card) : setFirstPick(card)
}

return ( <
  div className = "App" >
  <
  h1 > Memory Game < /h1> <
  button onClick = {
    shuffleCards
  } > New Game < /button> <
  div className = "card-grid" > {
    cards.map(card => ( <
      Card key = {
        card.id
      }
      card = {
        card
      }
      handleChoice = {
        handleChoice
      }
      />
    ))
  } <
  /div> <
  /div>
);
}

export default App;