"use client";

import React from "react";
import { avalanche } from "wagmi/chains";
import { Button } from "@/components/atoms/MovingBorder";
import { Settings } from "@/components/atoms/Icons";
import { SelectorCard } from "@/components/molecules/SelectorCard";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { GasButton } from "@/components/atoms/GasButton";
import { useQuote } from "@/hooks/quote/useQuote";

export default function Selector() {
  const [sellChainId, setSellChainId] = React.useState<number>(0);
  const [buyChainId, setBuyChainId] = React.useState<number>(avalanche.id);
  const [sellCurrency, setSellCurrency] = React.useState<string>("ETH");
  const [buyCurrency, setBuyCurrency] = React.useState<string>("DAI");
  const [inputAmount, setInputAmount] = React.useState<number>(0);

  const { data } = useQuote(sellCurrency, buyCurrency, inputAmount);

  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="h-screen w-full px-4 lg:px-0 md:w-4/5 lg:w-3/5 xl:w-1/2 relative flex flex-col items-center justify-center space-y-12">
        <div className="flex items-center justify-between w-full">
          <GasButton />
          <Settings />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2 w-full">
          <SelectorCard
            title="Selling"
            isSendChain={true}
            chainId={sellChainId}
            setChainId={(chainId) => {
              if (chainId !== buyChainId)
                setSellChainId(chainId);
            }}
            currency={sellCurrency}
            setCurrency={setSellCurrency}
            amount={inputAmount}
            setAmount={setInputAmount}
          />
          <span className="text-xl hidden md:block text-[#9CA3AF]">X</span>
          <SelectorCard
            title="Buying"
            chainId={buyChainId}
            setChainId={(chainId) => {
              if (chainId !== sellChainId)
                setBuyChainId(chainId);
            }}
            currency={buyCurrency}
            setCurrency={setBuyCurrency}
            amount={data?.outputAmount || 0}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 w-full">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <QuoteCard
              title="Equiv."
              rate="17.48"
              slippage="0.00%"
              gasEstimate="$1.23"
            />
            <QuoteCard title="Competitor’s Quote" />
          </div>
          <Button
            borderRadius="3rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 space-x-2 py-3 px-6"
          >
            <span>Execute Trade</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
