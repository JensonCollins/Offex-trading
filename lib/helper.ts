import * as all from "viem/chains";

const { defichainEvm: _, ...chains } = all;

export const getChain = (chainId: number) => {
  for (const chain of Object.values(chains)) {
    if (chain.id === chainId) {
      return chain;
    }
  }

  throw new Error(`Chain with id ${chainId} not found`);
};
