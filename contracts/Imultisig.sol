//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;



interface IMultisig {
    function withdrawEther(uint256 _amount) external;
    function Approve(uint256 id) external;
    function contractBalance() external view returns (uint256);
}