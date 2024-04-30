require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
// require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    scroll: {
      url: process.env.Rpc_Url,
    chainId: 534351,
    accounts: [process.env.Private_Key]
    }
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  mocha: {
    timeout: 40000,
  },etherscan: {
    // Your Etherscan API key
    apiKey: process.env.EtherScan_key
 },customChains: [
  {
    network: "scroll",
    chainId: 534351,
    urls: {
      apiURL: process.env.Rpc_Url,
      browserURL: "https://scrollscan.com/"
    }
  }
],sourcify: {
  enabled: true,
  // Optional: specify a different Sourcify server

}
}