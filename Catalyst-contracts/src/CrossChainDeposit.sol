// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract CrossChainDeposit {
    using SafeERC20 for IERC20;

    IERC20 public catalystToken;
    address public admin;

    event Deposited(address indexed user, uint256 amount, bytes32 toChain);

    constructor(address _catalystToken) {
        catalystToken = IERC20(_catalystToken);
        admin = msg.sender;
    }

    function deposit(uint256 amount, bytes32 toChain) external {
        require(amount > 0, "Amount should be greater than 0");
        
        catalystToken.safeTransferFrom(msg.sender, address(this), amount);
        emit Deposited(msg.sender, amount, toChain);
    }

    function withdraw(uint256 amount) external {
        require(msg.sender == admin, "Only admin can withdraw");
        
        catalystToken.safeTransfer(admin, amount);
    }
}
