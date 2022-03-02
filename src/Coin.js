import React from "react";

/** Coin: displays image, heads/tails.
 * 
 * Props:
 * - 
 * 
 * State:
 * - none
 * 
 * App --> Coin
 */
function Coin({currentFlip}){
  
  return (
    <div className={currentFlip}>
      <button className ="coinFace">
        <span className="flipMsg">Flip Me</span>
      </button>
    </div>
  )
}

export default Coin;
