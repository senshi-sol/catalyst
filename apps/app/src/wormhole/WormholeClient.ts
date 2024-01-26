import { ethers } from 'ethers';
import { Connection, PublicKey } from '@solana/web3.js';

class WormholeClient {
    private ethProvider: ethers.providers.Provider;
    private solConnection: Connection;
    private wormholeSDK: any;
    initializeWormholeSDK: any;

    constructor(ethRpcUrl: string, solClusterUrl: string) {
        this.ethProvider = new ethers.providers.JsonRpcProvider(ethRpcUrl);
        this.solConnection = new Connection(solClusterUrl);
        this.initializeWormholeSDK();
    }

    // private initializeWormholeSDK() {
    // }

    // async transferFromEthereumToSolana(ethPrivateKey: string, solRecipientAddress: string, amount: number): Promise<string> {
    // }

    // async transferFromSolanaToEthereum(solPrivateKey: Uint8Array, ethRecipientAddress: string, amount: number): Promise<string> {
    // }
}

export default WormholeClient;
