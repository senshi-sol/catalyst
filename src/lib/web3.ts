import Web3 from 'web3';

let web3: Web3;

if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
    web3 = new Web3((window as any).ethereum);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/NFURA_API_KEY'
    );
    web3 = new Web3(provider);
}

export default web3;
