import { arbitrum, avalanche, bsc, mainnet, polygon } from "wagmi/chains";

export const SUPPORT_NETWORKS = [mainnet, bsc, avalanche, polygon, arbitrum];

export const SUPPORT_CURRENCIES = [
  {
    name: "ETH",
    symbol: "ETH",
    address: "0x0000000000000000000000000000000000000000",
  },
  {
    name: "DAI",
    symbol: "DAI",
    address: "0x0000000000000000000000000000000000000000",
  },
];

export const DECIMAL_FACTOR = 3;
