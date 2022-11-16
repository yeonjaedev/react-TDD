import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from "recoil";
import CompletePage from "./pages/CompletePage/CompletePage";
function App() {
    const [step,setStep] = useState<Number>(0)
    return (
        <RecoilRoot>
            <div className="App">
                {step === 0 && <OrderPage setStep={setStep}/>}
                {step === 1 && <SummaryPage setStep={setStep}/>}
                {step === 2 && <CompletePage setStep ={setStep}/>}
            </div>
        </RecoilRoot>
    );
}

export default App;
