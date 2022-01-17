import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {DAppProvider, TestBNB} from '@usedapp/core'
const config = {
    readOnlyChainId: TestBNB.chainId,
    readOnlyUrls: {
        [TestBNB.chainId]: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    },
}
console.log(TestBNB.chainId)
document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(event) {
    var eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform  = "rotate("+ rot +"deg)"
    })
}

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <DAppProvider config={config}>
                <App />
            </DAppProvider>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
