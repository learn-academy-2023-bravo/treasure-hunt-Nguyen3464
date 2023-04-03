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
alert(clickSquare)
}

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((value, index) => {
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
