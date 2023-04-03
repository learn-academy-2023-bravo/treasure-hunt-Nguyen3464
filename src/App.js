import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

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

const handleGamePlay = (clickSquare) => {
  let updateBoard = [...board] // makes copy of array
  updateBoard[clickSquare] = "🎄" // access value at index[]
  setBoard(updateBoard)//change value at index to "🎄"
  
}

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((value, index) => { //maps over board array and pulls value and index
        return <Square 
                value={value}
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
