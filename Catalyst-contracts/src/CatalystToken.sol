// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CatalystToken is ERC20 {
    constructor() ERC20("Catalyst Token", "CAT") {
        _mint(msg.sender, 1000000 * 10**18); // Initial supply
    }
}
