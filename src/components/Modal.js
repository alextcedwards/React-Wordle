import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className = "modal">
        {isCorrect && (
            <div>
              <h1>You Win!</h1>
              <h1>Hit Refresh To Play Again!</h1> 
            </div>
        )}
        {!isCorrect && (
            <div>
              <h1>Oops!</h1>  
              <p>Answer:</p>
              <p className="solution">{solution}</p>
              <p>Better Luck Next Time!</p>
              <h1>Refresh The Page To Try Again</h1>
            </div>
        )}
    </div>
  )
}
