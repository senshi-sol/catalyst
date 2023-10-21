// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract SwapHelper {
    using SafeERC20 for IERC20;

    ISwapRouter public uniswapRouter;
    IERC20 public catalystToken;

    constructor(address _uniswapRouter, address _catalystToken) {
        uniswapRouter = ISwapRouter(_uniswapRouter);
        catalystToken = IERC20(_catalystToken);
    }

    function swap(uint256 amountIn, uint256 amountOutMin, address[] calldata path) external {
        catalystToken.safeTransferFrom(msg.sender, address(this), amountIn);
        catalystToken.approve(address(uniswapRouter), amountIn);

        uniswapRouter.exactInput(
            ISwapRouter.ExactInputParams({
                path: path,
                recipient: msg.sender,
                deadline: block.timestamp + 1200,
                amountIn: amountIn,
                amountOutMinimum: amountOutMin
            })
        );
    }
}
