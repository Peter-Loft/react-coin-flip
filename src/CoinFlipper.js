import React, {useState} from "react";
import Coin from "./Coin";
import StatusBar from "./StatusBar";


/** CoinFlipper: tracks coin flipping history passes props to Coin and StatusBar
 * 
 * Props:
 * - none
 * 
 * State:
 * - flips: number
 * - heads: number
 * - tails: number
 * 
 * App --> CoinFlipper --> Coin, StatusBar
 */
function CoinFlipper(){
    const [flips, setFlips] = useState(0);
    const [heads, setHeads] = useState(0);
    const [tails, setTails] = useState(0);
    const [currentFlip, setCurrentFlip] = useState('off');

    console.log("Rendering CoinFlipper");

    function _flipCoin(){
        const randAnswerIdx = Math.floor(Math.random() * 2);
        let face = randAnswerIdx === 0 ? 'heads' : 'tails';
        setCurrentFlip(face);
        if (face === 'heads'){
          setFlips(flips + 1);
          setHeads(heads + 1);
        } else if (face === 'tails'){
          setFlips(flips + 1);
          setTails(tails + 1);
        }
        return face; 
      };
  return (
      <div>
          <h1>Let's flip a coin!</h1>
          <div onClick={_flipCoin}>
            <Coin currentFlip={currentFlip} />
          </div>
          
          <StatusBar flips={flips} heads={heads} tails={tails} />
      </div>
  );
}

export default CoinFlipper;