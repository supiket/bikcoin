# bikcoin
About the fact that we need to buy Bitcoin. 
This repo is a web3 project that uses 2 smart contracts on the Binance Smart Chain Testnet. 
It is served on [Github Pages](https://supiket.github.io/bikcoin). \
To be able to interact with the demo, an connecting to a Binance Smart Chain Testnet account via Metamask is required. For more information, please check [this guide](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain) about connecting Metamask to Binance Smart Chain.
In the demo you can verify an address on the blockchain or query if an address is verified using Verification Contract and you can mint, transfer and trace product NFTs using Product Provenance Contract.
You can find a better explanation on the [Report.pdf file](https://github.com/supiket/bikcoin/blob/master/Report.pdf).

# Explanation of Code
| File                                | Explanation                              | 
|-------------------------------------|------------------------------------------|
| src/Contracts/ProductProvenance.sol | Solidity contract for Product Provenance |
| src/Contracts/Verification.sol      | Solidity contract for Verification       |
| src/Contracts/contracts.js          | javascript                               |


# Running On Local
In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000/bikcoin](http://localhost:3000/bikcoin) to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.