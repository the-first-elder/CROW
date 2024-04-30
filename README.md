# Crow: A Decentralized Crowdfunding Platform

## Overview

Crow is a decentralized crowdfunding platform built on the Ethereum blockchain. It allows users to create, fund, and manage projects with the help of smart contracts. This platform is designed to facilitate the crowdfunding process in a transparent and secure manner.

## Features

- **Project Creation**: Users can create new projects by specifying details such as title, description, image URL, cost, and expiration date.
- **Project Management**: Project owners can update their projects and manage their funding process.
- **Backing Projects**: Users can back projects by contributing Ether. The platform tracks the total amount raised for each project.
- **Refunds and Payouts**: If a project does not meet its funding goal by its expiration date, backers can request refunds. Once a project meets its funding goal, the project owner can request a payout.
- **Taxation**: A percentage of the funds raised is set aside as a tax, which can be adjusted by the contract owner.
- **Security and Transparency**: All transactions are recorded on the blockchain, ensuring transparency and security.

## Installation

To install and deploy the Crow contract, you will need Foundry, a development environment for Ethereum smart contracts.

1. **Install Foundry**: Follow the instructions on the [Foundry GitHub repository](https://github.com/gakonst/foundry) to install Foundry on your system.

2. **Clone the Repository**: Clone this repository to your local machine.

3. **Deploy the Contract**: Use Foundry to compile and deploy the contract to the Ethereum network. You will need to specify the initial project tax percentage during deployment.

## Usage

After deploying the contract, you can interact with it using the provided functions. Here's a brief overview of how to use the contract:

- **Create a Project**: Use the `createProject` function to create a new project. You will need to provide the project details as arguments.
- **Back a Project**: To back a project, use the `backProject` function and send Ether along with the transaction.
- **Manage Projects**: Project owners can update their projects using the `updateProject` function. They can also delete projects that are no longer active.
- **Request Refunds**: If a project does not meet its funding goal, backers can request refunds using the `requestRefund` function.
- **Payout Projects**: Once a project meets its funding goal, the project owner can request a payout using the `payOutProject` function.

## Contract Address

Contract Address on scroll scan can be located at:
```
0x7eBe3748A20FC92614DF4D065fb6f08888fEA580
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to improve the project.

