import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blur from '../images/blur.jpeg';
import logo from '../images/RacoonBearPreview.png';

import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  Web3Button, 
} from "@thirdweb-dev/react";

const Mint = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
      <div className="absolute top-4 right-4 z-50">
        {/* <ThirdwebProvider
          activeChain={process.env.clientId}
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
          ]}
        >
          <ConnectWallet theme="dark" />
        </ThirdwebProvider> */}
      </div>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src={blur}
          className="animate-pulse-slow absolute inset-auto block w-full min-h-screen object-cover"
          alt="Background Blur"
        />
        <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
          <div className="z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
            <h1 className="font-coiny uppercase font-bold text-3xl md:text-4xl bg-gradient-to-br from-brand-green to-brand-blue bg-clip-text text-transparent mt-3">
              Contract
            </h1>
            <h3 className="text-sm text-pink-200 tracking-widest">
              0x750685ea3918804c736660DC7FdAe31ed8428E49
            </h3>
            <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
              <div className="relative w-full">
                <div className="font-coiny z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple rounded-md flex items-center justify-center text-white font-semibold">
                  <p>
                    <span>{count}</span> / 100
                  </p>
                </div>
                <img
                  src={logo}
                  className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                <div className="font-coiny flex items-center justify-between w-full">
                  <button
                    className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    onClick={handleDecrement}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p className="flex items-center justify-center flex-1 grow text-center font-bold text-brand-pink text-3xl md:text-4xl">
                    {count}
                  </p>
                  <button
                    className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    onClick={handleIncrement}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                  </div>
                  <div className="mt-20">
            <Web3Button
              contractAddress="0x750685ea3918804c736660DC7FdAe31ed8428E49"
              action={(contract) => contract.erc721.claim(1)}
              onSuccess={() => alert("Claimed NFT!")}
              onError={(err) => alert(err)}
            >
              Claim NFT
            </Web3Button>
          </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
