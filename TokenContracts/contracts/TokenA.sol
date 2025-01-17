// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TokenA is ERC20{
    constructor() ERC20("TokenA", "TA")
    {
        _mint(msg.sender, 100000 * (10**18) );
    }

}