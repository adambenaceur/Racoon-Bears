import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, useContract } from '@thirdweb-dev/react';
import './styles/globals.css';


import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'goerli';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ThirdwebProvider activeChain={activeChain}>
            <App/>
        </ThirdwebProvider>
    </React.StrictMode>
);

function Component() {
    const { contract, isLoading } = useContract(
        '0x750685ea3918804c736660DC7FdAe31ed8428E49'
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
