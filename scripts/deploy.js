const { ethers } = require('hardhat')
const { run } = require("hardhat")

const fs = require('fs')
const {verify} = require('../verify')
async function main() {
  const taxFee = 5
  const Contract = await hre.ethers.getContractFactory('Crow')
  const contract = await Contract.deploy(taxFee)

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
  await hre.run("verify:verify",{
    contract:"contracts/Crow.sol:Crow",
    address: contract.address,
    constructorArguments:[]
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
