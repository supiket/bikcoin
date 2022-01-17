import logo from '../logo.svg'
import '../App.css'
import account from '../account.js'
import verificationContract from '../contracts.js'

export default function Verify() {
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

function verify(queryAddress) {
    verificationContract.methods.verify(queryAddress).send({ from: account })
}
