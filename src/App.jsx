import { useState, useEffect } from 'react'

import './App.css'

function App() {
  
  const numbers = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9];
  const min = 0;
  const max = 9;

  const[secretNumber, setSecretNumber] = useState();
  const[selectedNumber, setSelectedNumber] = useState();
  const[gameMessage, setGameMessage] = useState("");
  const[success, setSuccess] = useState(false);
  
  const randomNumber = () => {
    return Math.floor(Math.random() * (max - min +1)) + min
  }

  const startGame = () => {
    setSuccess(false);
    setGameMessage("Guess the number");
    const number = randomNumber();
    setSecretNumber(number);
  }

  const handleClick = (number) => {
    setSelectedNumber(number);
  }

  useEffect(() => {
    if(secretNumber){
      if(selectedNumber === secretNumber){
        setSuccess(true);
        setGameMessage("You guessed the number!!");
      } else if (selectedNumber > secretNumber) {
        setGameMessage("Your number is above of the hidden number");
      } else {
        setGameMessage("Your number is below of hidden number");
      }
    } 
  }, [selectedNumber])
  

  return (
    <>
      <div className='container'>
        <div className='game-header'>
          <h1>GUESS NUMBER</h1>
        </div>
        <div className='secret-container'>
          <div className='secret-number'>
            <label>{success ? secretNumber : "?"}</label>
          </div>
        </div>
        <div className='numbers-container'>
          {
            numbers.map((number, index) => {
              return <div key={index} onClick={() => handleClick(number)} className='secret-number'><label>{number}</label></div>
            })
          }
        </div>
        <div className='messages-container'>
          <p>{gameMessage}</p>
        </div>
        <div className='button-game'>
          <button className='play-button' onClick={startGame}>PLAY THE GAME</button>
        </div>
      </div>
    </>
  )
}

export default App
