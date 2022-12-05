import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import'@openzeppelin/hardhat-upgrades';
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import 'hardhat-deploy';
import "hardhat-deploy-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
