import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
    const [num, setNum] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);
    const plusNum = () => {
        setNum(num + 1);
    };
    const minusNum = () => {
        setNum(num - 1);
    };
    return (
        <div className="App" style={{textAlign: "center"}}>
            <p data-testid="counter">{num}</p>
            <button data-testid="plus-button" onClick={_ => plusNum()} disabled={disabled} style={{marginRight: 10}}>
                +
            </button>
            <button disabled={disabled} data-testid="minus-button" onClick={_ => minusNum()}>
                -
            </button>
            <div>
                <button data-testid="onoff-button" onClick={_ => setDisabled(!disabled)} style={{marginTop: 20, backgroundColor: "blue"}}>
                    on/off
                </button>
            </div>
        </div>
    );
}

export default App;
