import React from "react"

const RestartButton = () => {

    const handleRestart = () => {
        window.location.reload()
      }

  return (
    <>
      <div className="restartButton">
        <button onClick={handleRestart}>Play Again</button>
      </div>
    </>
  )
}
export default RestartButton