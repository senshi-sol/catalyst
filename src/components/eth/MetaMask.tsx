import React, { useEffect, useState } from 'react';
import web3 from '../../lib/web3';

const MetaMask: React.FC = () => {
    const [account, setAccount] = useState<string>('');
    const [balance, setBalance] = useState<string>('');

    useEffect(() => {
        const loadBlockchainData = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            const balance = await web3.eth.getBalance(accounts[0]);
            setBalance(web3.utils.fromWei(balance, 'ether'));
        };

        loadBlockchainData();

        (window as any).ethereum.on('accountsChanged', (accounts: string[]) => {
            setAccount(accounts[0]);
        });

        (window as any).ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    }, []);

    return (
        <div>
            <p>Account: {account}</p>
            <p>Balance: {balance} ETH</p>
        </div>
    );
}

export default MetaMask;
