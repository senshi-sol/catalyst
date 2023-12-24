use anchor_lang::prelude::*;
use anchor_lang::solana_program::program_error::ProgramError;

declare_id!("11111111111111111111111111111111");

#[program]
pub mod catalyst_nft {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, metadata: Metadata) -> Result<()> {
        let nft_account = &mut ctx.accounts.nft_account;
        nft_account.metadata = metadata;
        Ok(())
    }

    pub fn transfer_nft(ctx: Context<TransferNFT>, recipient: Pubkey) -> Result<()> {
        let nft_account = &mut ctx.accounts.nft_account;
        let from = &ctx.accounts.from;

        // Manual ownership check
        if nft_account.owner != from.key() {
            return Err(ProgramError::IllegalOwner.into());
        }

        nft_account.owner = recipient;
        emit!(NFTTransferred {
            nft_id: nft_account.nft_id,
            from: from.key(),
            to: recipient,
        });
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32 + 64)]
    pub nft_account: Account<'info, NFTAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct TransferNFT<'info> {
    #[account(mut)]
    pub nft_account: Account<'info, NFTAccount>,
    #[account(mut)]
    pub from: Signer<'info>,
}

#[account]
pub struct NFTAccount {
    pub owner: Pubkey,
    pub metadata: Metadata,
    pub nft_id: u64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Metadata {
    pub name: String,
    pub image_uri: String,
}

#[event]
struct NFTTransferred {
    nft_id: u64,
    from: Pubkey,
    to: Pubkey,
}
