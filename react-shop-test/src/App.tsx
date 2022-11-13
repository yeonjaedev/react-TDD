import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from "recoil";
function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <OrderPage />
                {/* <SummaryPage /> */}
            </div>
        </RecoilRoot>
    );
}

export default App;
