import { useState } from 'react';
import bananImg from "../assets/images/banan.png";
import "../assets/style/Game.css";

const Game = () => {
    const [banan, setBanan] = useState(0);

    return(
        <div className="game-container">
            <div className="banan-container">
                <h3>banan : {banan}</h3>
                <img src={bananImg} alt="banan" onClick={() => setBanan(banan + 1)} />
            </div>
        </div>
    )
}

export default Game;