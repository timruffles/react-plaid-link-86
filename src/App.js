import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {usePlaidLink} from "react-plaid-link";

function App() {
    const {open, ready, error} = usePlaidLink({
        clientName: 'Your app name',
        env: 'sandbox',
        product: ['auth', 'transactions'],
        publicKey: '48e057614f6b02d8dbecdf4ec40fc9',
        onSuccess: (...args) => {
            console.log(...args)
        },
    });

    const [count, setCount] = useState(0)

    // render really fast
    useEffect(() => {
        window.requestAnimationFrame(() => {
            setCount(count + 1)
        })
    })

    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo two"/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={open}
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
