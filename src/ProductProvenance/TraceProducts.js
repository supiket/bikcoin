import logo from '../logo.svg'
import '../App.css'
import account from '../account.js'
import productProvenanceContract from '../contracts.js'

export default function TraceProducts() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function getLastTokenId() {
    productProvenanceContract.methods.getLastTokenId().send({ from: account })
}

function getProductByTokenId(tokenId) {
    productProvenanceContract.methods.getProductByTokenId(web3.utils.asciiToHex(tokenId)).send({ from: account })
}

function getProductBySerialNo(serialNo) {
    productProvenanceContract.methods.getProductBySerialNo(web3.utils.asciiToHex(serialNo)).send({ from: account })
}
