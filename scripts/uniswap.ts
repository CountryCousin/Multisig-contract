// import { ethers } from "hardhat"


// 16/08/2022

// async function main() {

//     // interact with uniswap swapTokenForExactToken function
//     // Swap usdt to dai
//     // To-Do
//        //erc token interface
//        //approve the uniswap contract
//        // check balance of signer before swap
//        //swap token calling the function
//        // check balance after swap.

//        const USDTADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
//        const DAIADDRESS = ""
    
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
//   });

import { ethers } from "hardhat";

async function main() {
  //interact with uniswap swapTokenforExactToken function
  //swap usdt to dai
  //TO-DO
  //erc20 token interface
  //Approve the uniswap contract
  //check balance of signer before swap
  //swap token caling the function
  //check balance after swap.

  const USDTAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const amountOut = 2000;

  const helpers = require("@nomicfoundation/hardhat-network-helpers");
  const USDTHolder = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";
  await helpers.impersonateAccount(USDTHolder);
  const impersonatedSigner = await ethers.getSigner(USDTHolder);

  const USDT = await ethers.getContractAt(
    "IERC20",
    USDTAddress,
    impersonatedSigner
  );
  const DAI = await ethers.getContractAt("IERC20", DAIAddress);
  const ROUTER = await ethers.getContractAt(
    "IUniswap",
    UNIRouter,
    impersonatedSigner
  );
  await USDT.approve(UNIRouter, amountOut);
    const usdtBal = await USDT.balanceOf(USDTHolder);
    const daiBal = await DAI.balanceOf(USDTHolder);

    console.log("balance before swap", usdtBal);

  await ROUTER.swapTokensForExactTokens(
    amountOut,
    300,
    [USDTAddress, DAIAddress],
    USDTHolder,
    1660678511
  );

    const usdtBalAfter = await USDT.balanceOf(USDTHolder);
    const daiBalAfter = await DAI.balanceOf(USDTHolder);

    console.log("balance after swap", usdtBalAfter, daiBalAfter);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});