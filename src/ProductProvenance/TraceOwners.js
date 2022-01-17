import logo from '../logo.svg'
import '../App.css'
import account from '../account.js'
import productProvenanceContract from '../contracts.js'

export default function TraceOwners() {
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

function getOwnerCountByTokenId(tokenId) {
    productProvenanceContract.methods.getOwnerCountByTokenId(web3.utils.asciiToHex(tokenId)).send({ from: account })
}

function getOwnerCountBySerialNo(serialNo) {
    productProvenanceContract.methods.getOwnerCountBySerialNo(web3.utils.asciiToHex(serialNo)).send({ from: account })
}

function getFirstOwnerByTokenId(tokenId) {
    productProvenanceContract.methods.getFirstOwnerByTokenId(web3.utils.asciiToHex(tokenId)).send({ from: account })
}

function getFirstOwnerBySerialNo(serialNo) {
    productProvenanceContract.methods.getFirstOwnerBySerialNo(web3.utils.asciiToHex(serialNo)).send({ from: account })
}

function getLastOwnerByTokenId(tokenId) {
    productProvenanceContract.methods.getLastOwnerByTokenId(web3.utils.asciiToHex(tokenId)).send({ from: account })
}

function getLastOwnerBySerialNo(serialNo) {
    productProvenanceContract.methods.getLastOwnerBySerialNo(web3.utils.asciiToHex(serialNo)).send({ from: account })
}

function getOwnerByTokenIdAndOwnerIndex(tokenId, ownerIndex) {
    productProvenanceContract.methods.getOwnerByTokenIdAndOwnerIndex(web3.utils.asciiToHex(tokenId), web3.utils.asciiToHex(ownerIndex)).send({ from: account })
}

function getOwnerBySerialNoAndOwnerIndex(serialNo, ownerIndex) {
    productProvenanceContract.methods.getOwnerBySerialNoAndOwnerIndex(web3.utils.asciiToHex(serialNo), web3.utils.asciiToHex(ownerIndex)).send({ from: account })
}
