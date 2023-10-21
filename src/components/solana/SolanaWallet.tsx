import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { wallets } from '../../lib/wallets';

const SolanaWallet: React.FC = () => {
    return (
        <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default SolanaWallet;
