import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, useContract } from '@thirdweb-dev/react';
import './styles/globals.css';


const clientIdConst = '72244ea3d83a9c9d5cbd6965e4627a79'

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
interface ThirdwebProviderProps {
    activeChain : string;
    clientId : string;
}

const activeChain = 'goerli';

const container = document.getElementById('root');
const root = createRoot(container!);
const urlParams = new URL(window.location.toString()).searchParams;

const clientId = urlParams.get("clientId") || clientIdConst || "";


root.render(
    <React.StrictMode>
        <ThirdwebProvider activeChain={activeChain} clientId={clientId}>
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
