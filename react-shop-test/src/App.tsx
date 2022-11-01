import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
    return (
        <div className="App">
            <OrderPage />
            <SummaryPage />
        </div>
    );
}

export default App;
