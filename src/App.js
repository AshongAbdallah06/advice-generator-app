import { useState } from 'react';
import './App.css';
import Axios from "axios";
import dice from "./images/icon-dice.svg"
import desktopDivider from "./images/pattern-divider-desktop.svg"

function App() {
    const [adviceNumber, setAdviceNumber] = useState("");
    const [advice, setAdvice] = useState("");


    const getAdvice = () => {
        Axios.get("https://api.adviceslip.com/advice").then((res) => {
            setAdviceNumber(res.data.slip.id);
            setAdvice(res.data.slip.advice);
        })
    }
    getAdvice();

    const handleClick = () => {
        getAdvice();
    }
    return (
        <div className="App">
            <p className="advice-number">ADVICE #{adviceNumber}</p>
            <blockquote className="advice">{advice}</blockquote>
            <div className='divider-cont'>
                <img className="divider" src={desktopDivider} alt="" />
            </div>
            <button onClick={handleClick}>
                <img src={dice} alt="dice-image" className='dice' />
            </button>
        </div>
    );
}

export default App;
