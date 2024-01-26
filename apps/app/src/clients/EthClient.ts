import { ethers } from 'ethers';

class EthClient {
    private provider: ethers.providers.Provider;
    private wallet: ethers.Wallet | null;
    private contract: ethers.Contract | null;

    constructor(rpcUrl: string) {
        this.provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        this.wallet = null;
        this.contract = null;
    }

    connectWallet(privateKey: string): void {
        this.wallet = new ethers.Wallet(privateKey, this.provider);
    }

    async getBalance(address: string): Promise<string> {
        const balance = await this.provider.getBalance(address);
        return ethers.utils.formatEther(balance);
    }

    async sendTransaction(recipient: string, amount: string): Promise<ethers.providers.TransactionReceipt> {
        if (!this.wallet) {
            throw new Error('Wallet not connected');
        }
        const tx = {
            to: recipient,
            value: ethers.utils.parseEther(amount)
        };
        const transactionResponse = await this.wallet.sendTransaction(tx);
        return await transactionResponse.wait();
    }

    loadContract(address: string, abi: any): void {
        if (!this.wallet) {
            throw new Error('Wallet not connected');
        }
        this.contract = new ethers.Contract(address, abi, this.wallet);
    }

    async callContractMethod(methodName: string, args: any[]): Promise<any> {
        if (!this.contract) {
            throw new Error('Contract not loaded');
        }
        return await this.contract[methodName](...args);
    }
}

export default EthClient;
