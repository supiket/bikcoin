# bikcoin
About the fact that we need to buy Bitcoin. 
This repo is a web3 project that uses 2 smart contracts on the Binance Smart Chain Testnet. 
It is served on [Github Pages](https://supiket.github.io/bikcoin). \
To be able to interact with the demo, an connecting to a Binance Smart Chain Testnet account via Metamask is required. For more information, please check [this guide](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain) about connecting Metamask to Binance Smart Chain. \
In the demo you can verify an address on the blockchain or query if an address is verified using Verification Contract and you can mint, transfer and trace product NFTs using Product Provenance Contract.
You can find a better explanation on the [Report.pdf file](https://github.com/supiket/bikcoin/blob/master/Report.pdf).

# Explanation of Code
| File										     | Explanation											  | 
|------------------------------------------------|--------------------------------------------------------|
| src/Contracts/ProductProvenance.sol			 | Solidity contract for Product Provenance				  |
| src/Contracts/Verification.sol				 | Solidity contract for Verification					  |
| src/Contracts/contracts.js					 | Contains addresses and ABI codes of the two contracts  |
| src/ProductProvenance/Mint.js					 | Page for minting a token representing a product		  |
| src/ProductProvenance/Transfer.js			     | Page for transferring ownership of a token			  |
| src/ProductProvenance/AckTransfer.js			 | Page for confirming transfer of ownership of a token   |
| src/ProductProvenance/TraceOwners.js			 | Page for tracing the owners of a token by ID			  |
| src/ProductProvenance/TraceOwnersBySerial.js	 | Page for tracing the owners of a token by serial no	  |
| src/ProductProvenance/TraceProducts.js		 | Page that lists all minted tokens				      |
| src/ProductProvenance/Components/OwnerCard.js	 | Card view for owners								      |
| src/ProductProvenance/Components/ProductCard.js| Card view for products							      |
| src/Verification/Verify.js					 | Page that verifying an address at the state		      |
| src/Verification/QueryVerified.js				 | Page for querying verification status at the state	  |
| src/App.js									 | Routes												  |
| src/Layout.js									 | Layout and navigation								  |
| src/Home.js									 | Welcome page											  |


# Running On Local
In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000/bikcoin](http://localhost:3000/bikcoin) to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.