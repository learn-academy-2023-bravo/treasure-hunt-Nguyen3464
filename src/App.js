
import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'
import RestartButton from './components/RestartButton'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = 
    useState(Math.floor(Math.random() * board.length))

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const [counter, setCounter] = useState("5")



  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board] // creates a copy of the array
    if(clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard)
    } else if (clickedSquare === bombLocation){
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🌲"
      setBoard(updateBoard)
    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <RestartButton />

      <div className="board">
      {board.map((square, index) => {
          return <Square 
            square={square}
            index={index}
            key={index}
            handleGamePlay={handleGamePlay}
            />
        })
      }
      </div>
    </>
  )
}

export default App
