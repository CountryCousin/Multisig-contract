// require("dotenv").config({path: ".env"});
// import "@nomiclabs/hardhat-ethers";


// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const RINKEBY_API_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;

// const PRIVATE = process.env.ACCOUNT_PRIVATE_KEY;

// const ROPSTEN_URL_API = process.env.ALCHEMY_RINKEBY_API_KEY_URL;


// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     hardhat: {
//       forking: {
//         // url: ROPSTEN_URL_API,
//         url : RINKEBY_API_URL,
//       }
//     },
//     rinkeby: {
//       url: RINKEBY_API_URL,
//       accounts: [PRIVATE],
//     },
//     ropsten: {
//       url: ROPSTEN_URL_API,
//       accounts: [PRIVATE]
//     }
//   }
// };


import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    hardhat: {
      forking: {
        url: process.env.URL!,
      },
    },
    // mainnet: {
    //   url: process.env.URL,
    //   //@ts-ignore
    //   accounts: [process.env.KEY],
    // },
  },
};

export default config;