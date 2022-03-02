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
function Coin(){

  function _getRandomAnswer(){
    const randAnswerIdx = Math.floor(Math.random() * 2);
    return randAnswerIdx;
  };

}

export default Coin;