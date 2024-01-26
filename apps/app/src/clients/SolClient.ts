import { Connection, PublicKey, Transaction, LAMPORTS_PER_SOL, Keypair } from '@solana/web3.js';

class SolClient {
    private connection: Connection;
    private wallet: Keypair | null;

    constructor(cluster: string) {
        this.connection = new Connection(cluster);
        this.wallet = null;
    }

    setWalletFromSecretKey(secretKey: Uint8Array): void {
        this.wallet = Keypair.fromSecretKey(secretKey);
    }

    async getBalance(): Promise<number> {
        if (!this.wallet) {
            throw new Error('Wallet is not set.');
        }
        const balance = await this.connection.getBalance(this.wallet.publicKey);
        return balance / LAMPORTS_PER_SOL;
    }

    async sendSol(recipientAddress: string, amount: number): Promise<string> {
        if (!this.wallet) {
            throw new Error('Wallet is not set.');
        }

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: this.wallet.publicKey,
                toPubkey: new PublicKey(recipientAddress),
                lamports: amount * LAMPORTS_PER_SOL,
            }),
        );

        const signature = await this.connection.sendTransaction(transaction, [this.wallet]);
        await this.connection.confirmTransaction(signature, 'confirmed');
        return signature;
    }
}

export default SolClient;
