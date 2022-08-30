const helpers = require("@nomicfoundation/hardhat-network-helpers");
require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

// import * as dotenv from "dotenv";

async function main() {
  const _value = ethers.utils.parseEther("1");

  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  const MULTISIG = await ethers.getContractAt("IMultisig", CONTRACTADDRESS);

  let [valid1, valid2] = await ethers.getSigners();

  // const bal = await MULTISIG.contractBalance();
  // console.log("contractBalance", bal);

  let approval = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
  await helpers.impersonateAccount(approval);
  const impersonatedSigner = await ethers.getSigner(approval);

  let approval1 = "0x12896191de42EF8388f2892Ab76b9a728189260A";
  await helpers.impersonateAccount(approval1);
  const impersonatedSigner1 = await ethers.getSigner(approval1);



  const rec = await (
    await MULTISIG.connect(impersonatedSigner).withdrawEther(_value)
  ).wait();
  let impBal = await impersonatedSigner.getBalance();
  console.log(rec);
  console.log("impersonate bal", impBal);


  const rec1 = await (
    await MULTISIG.connect(impersonatedSigner1).Approve(8)
  ).wait();


  console.log(rec1);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
