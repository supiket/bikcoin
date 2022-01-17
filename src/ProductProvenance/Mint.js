import logo from '../logo.svg'
import '../App.css'
import account from '../account.js'
import productProvenanceContract from '../contracts.js'

export default function Mint() {
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

function mint(serialNo, zipCode) {
    productProvenanceContract.methods.manufacture(web3.utils.asciiToHex(serialNo), web3.utils.asciiToHex(zipCode)).send({ from: account })
}
