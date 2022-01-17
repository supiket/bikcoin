import detectEthereumProvider from '@metamask/detect-provider';

window.onload = async function() {

    const provider = await detectEthereumProvider();
	
    if (provider) {
      startApp(provider);
    } else {
      console.log('Please install MetaMask!');
    }

    function startApp(provider) {
      if (provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?');
      }
    }

    const chainId = await ethereum.request({ method: 'eth_chainId' });
    handleChainChanged(chainId);

    ethereum.on('chainChanged', handleChainChanged);

    function handleChainChanged(_chainId) {
//      window.location.reload();
    }

    let currentAccount = null;
    ethereum
      .request({ method: 'eth_accounts' })
      .then(handleAccountsChanged)
      .catch((err) => {
        console.error(err);
      });

    ethereum.on('accountsChanged', handleAccountsChanged);

    function handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        // do other things maybe
      }
    }
}

