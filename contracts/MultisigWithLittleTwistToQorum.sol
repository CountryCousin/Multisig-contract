// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
// import "hardhat/console.sol";

// contract Lock {
//     uint public unlockTime;
//     address payable public owner;

//     event Withdrawal(uint amount, uint when);

//     constructor(uint _unlockTime) payable {
//         require(
//             block.timestamp < _unlockTime,
//             "Unlock time should be in the future"
//         );

//         unlockTime = _unlockTime;
//         owner = payable(msg.sender);
//     }

//     function withdraw() public {
//         // Uncomment this line to print a log in your terminal
//         // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

//         require(block.timestamp >= unlockTime, "You can't withdraw yet");
//         require(msg.sender == owner, "You aren't the owner");

//         emit Withdrawal(address(this).balance, block.timestamp);

//         owner.transfer(address(this).balance);
//     }
// }

// This is a factoryContract 

// ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4","0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2","0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db","0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", "0x617F2E2fD72FD9D5503197092aC168c91465E7f2"]


// contract MultiSig{

//     // a contract that allows 70% of validSigner to Approve before withdrwal can be succesful

//     address[] public validSigner;
//     uint256 ID;

//     uint public a = validSigner.length;

//     function Qorum() public view returns(uint see){
//         see = (validSigner.length * 70)/100;
//     }
//     // mapping of transaction Id to number of approval to status
//     mapping(uint => mapping(uint => bool)) _approved; // id and no of approval//

//     //// mapping of transactionId to  number of approval
//     mapping(uint => uint) public noOfApproval; // no of confirmed transaction and no of approval//


//     // checking if an address has approved a particular transactionID
//     mapping(address => mapping(uint256 => bool)) signed;

//     mapping(uint => address) beneficiary;

//     mapping(uint256 => uint256) amount;

//     constructor(address[] memory _validSigner){
//         // for(uint i = 0; i < _validSigner.length; i++){
//         //     address signer = _validSigner[i];

//         //     validSigner.push(signer);
//         // }
//         validSigner = _validSigner;
//     }

    

//     function withdrawEther(uint _amount) external {
//         bool _valid = validOwner();
//         require(_valid, "you are not a valid owner");
//         beneficiary[ID]= msg.sender;
//         amount[ID]= _amount;
//         Approve(ID);
//         ID++;

//     }

// // checks to see the owner is a valid owner.
//     function validOwner()  private view returns(bool success) {
//         address valid;
        
//         for (uint256 i =0; i < validSigner.length; i++){
            
//             if (msg.sender== validSigner[i]){
//                 valid = msg.sender;
//             }  
//         }
//         assert(valid != address(0));
//             success = true;
        
//     }

//     function Approve(uint256 id) public{
//         bool valid = validOwner();
//         require(valid, "you are not a valid owner");
//         uint256 value = amount[id];
//         address _ben = beneficiary[id];
//         assert(signed[msg.sender][id] == false );
//         signed[msg.sender][id] == true;
//         uint256 num  = noOfApproval[id] + 1;
//         if (num >= Qorum()){
//         _approved[id][num]=true;
//         payable(_ben).transfer(value);
//         }
//     }

    

//     function contractBalance() external view returns (uint){
//         return address(this).balance;
//     }

//     receive() external payable{}
//     fallback() external payable{}
// }