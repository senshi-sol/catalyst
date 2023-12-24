use anchor_lang::prelude::*;

declare_id!("3Fm2RBQ9tDNWkUUkDcTCr7hCHDzLunvdnWgyF797rZ1F");

#[program]
pub mod catalyst {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
