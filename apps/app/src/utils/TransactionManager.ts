class TransactionManager {
    private ethereumQueue: Array<any>;
    private solanaQueue: Array<any>;
    sendEthereumTransaction: any;
    sendSolanaTransaction: any;

    constructor() {
        this.ethereumQueue = [];
        this.solanaQueue = [];
    }

    addToEthereumQueue(transaction: any): void {
        this.ethereumQueue.push(transaction);
    }

    addToSolanaQueue(transaction: any): void {
        this.solanaQueue.push(transaction);
    }

    async processEthereumQueue(): Promise<void> {
        for (const transaction of this.ethereumQueue) {
            try {
                await this.sendEthereumTransaction(transaction);
            } catch (error) {
                console.error('Failed Ethereum transaction:', error);
            }
        }
    }

    async processSolanaQueue(): Promise<void> {
        for (const transaction of this.solanaQueue) {
            try {


                await this.sendSolanaTransaction(transaction);
            } catch (error) {
                console.error('Failed Solana transaction:', error);
            }
        }
    }

    // private async sendEthereumTransaction(transaction: any): Promise<void> {
    //     // Ethereum transaction
    // }

    // private async sendSolanaTransaction(transaction: any): Promise<void> {
    //     // Solana transaction 
    // }

}

export default TransactionManager;
