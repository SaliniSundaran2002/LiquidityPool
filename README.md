# **Token-Swap**

## **Overview**
The **Token-Swap** project is a decentralized application (dApp) designed to streamline token interactions on the Ethereum blockchain. It integrates the following key features:
- Deployment of customizable ERC20 tokens.
- Creation and management of a liquidity pool smart contract.
- User-friendly frontend for seamless token swapping, liquidity addition, and removal.

---

## **Features**
- **ERC20 Token Deployment**: 
  - Fully customizable tokens, including name, symbol, and initial supply.
  - Implemented using OpenZeppelin's industry-standard ERC20 contract.

- **Liquidity Pool**: 
  - A robust smart contract enabling:
    - Token swaps.
    - Liquidity addition and removal.
    - Fee collection for liquidity providers.

---

## **Tech Stack**
- **Smart Contracts**: Written in **Solidity**.
- **Blockchain Platform**: Ethereum (supports both Testnet and Mainnet).
- **Development Tools**:
  - **Ethers.js**: Blockchain interaction library.
  - **Hardhat**: Ethereum development environment for testing, debugging, and deployment.
  - **OpenZeppelin**: Reusable and secure smart contract components.

---

## **Installation and Setup**

### **Prerequisites**
Ensure the following tools are installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Metamask](https://metamask.io/) browser extension
- Ethereum testnet account funded with test ETH

### **Setup Steps**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TVVinudev/Token-Swap.git
   cd Token-Swap
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the project root and define the following:
   ```env
   URL_ALCHEMY=your_api_key
   PRIVATE_KEY=your_ethereum_private_key
   ```
   Alternatively, use Hardhat's localhost environment:
   ```bash
   npx hardhat node
   ```
   Keep the local network running in a separate terminal.

4. **Compile and Deploy Smart Contracts**:
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

5. **Launch the Frontend**:
   ```bash
   cd front-end
   npm install
   npm run dev
   ```

6. **Access the dApp**:
   Open your browser and navigate to `http://localhost:5173`.

---

## **Usage**
1. **Connect Wallet**:
   Use Metamask to connect your Ethereum wallet.

2. **Interact with the dApp**:
   - View token balances.
   - Add or remove liquidity in the pool.
   - Swap tokens efficiently.

---

## **Smart Contract Details**
- **ERC20 Contract**:
  - Implements OpenZeppelin's ERC20 standard.
  - Ensures security and interoperability.

- **Liquidity Pool Contract**:
  - Enables token swaps based on an automated market maker (AMM) model.
  - Allows users to add/remove liquidity and earn fees.
  - Includes safeguards to prevent slippage and exploits.

---

## **Testing**
Execute smart contract tests using:
```bash
npx hardhat test
```

---

## **Contributing**
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request for review.

---

## **Acknowledgments**
- **[OpenZeppelin](https://openzeppelin.com/)**: For providing robust ERC20 implementations.
- **[Hardhat](https://hardhat.org/)**: For simplifying Ethereum development workflows.
- Community contributors and testers for their invaluable feedback and support.
