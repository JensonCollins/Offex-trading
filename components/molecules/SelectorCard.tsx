import React, { useEffect } from "react";
import { useAccount, useBalance, useChainId, useSwitchChain } from "wagmi";
import { CaretDown, Ethereum } from "@/components/atoms/Icons";
import { Meteors } from "@/components/atoms/Meteors";
import { CurrencySelect } from "@/components/molecules/CurrencySelect";
import { NetworkSelect } from "@/components/molecules/NetworkSelect";
import { getChain } from "@/lib/helper";
import { Input } from "@/components/atoms/Input";

interface SelectorCardProps {
  title: string;
  chainId: number;
  setChainId: (value: number) => void;
  currency: string;
  setCurrency: (value: string) => void;
  amount: number;
  setAmount?: (value: number) => void;
  isSendChain?: boolean;
}

export const SelectorCard = ({
  title,
  chainId,
  setChainId,
  currency,
  setCurrency,
  amount,
  setAmount,
  isSendChain,
}: SelectorCardProps) => {
  const connectedChainId = useChainId();
  const [active, setActive] = React.useState<boolean>(false);
  const [networkActive, setNetworkActive] = React.useState<boolean>(false);

  const { switchChain } = useSwitchChain();
  const account = useAccount();
  const result = useBalance({
    address: account.address,
    unit: "ether",
    chainId: isSendChain ? connectedChainId : chainId,
  });

  const onMaxClick = () => {};

  useEffect(() => {
    if (isSendChain) {
      switchChain({ chainId });
    }
  }, [chainId, isSendChain, switchChain]);

  return (
    <>
      <div className="w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-4 h-full overflow-hidden rounded-none flex flex-col space-y-4 justify-end items-start">
          <div className="flex w-full justify-between items-end px-4 text-white">
            <h6>{title}</h6>
            <div className="flex flex-col items-end text-white-600">
              <span className="text-xs text-[#9CA3AF]">Network</span>
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onMouseEnter={() => setNetworkActive(true)}
              >
                <Ethereum />
                <h6>
                  {getChain(isSendChain ? connectedChainId : chainId).name}
                </h6>
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-white border-opacity-20 py-3 px-4 space-y-4 w-full">
            <div className="flex items-center justify-between w-full text-xs">
              <span className="text-[#9CA3AF]">
                Balance: {Number(result?.data?.formatted).toFixed(2)}{" "}
                {
                  getChain(isSendChain ? connectedChainId : chainId)
                    .nativeCurrency.symbol
                }
              </span>
              {isSendChain && (
                <button className="text-[#60A5FA]" onClick={onMaxClick}>
                  Select Max
                </button>
              )}
            </div>
            <div className="flex items-center justify-between w-full">
              <div
                className="flex items-center space-x-2"
                onMouseEnter={() => setActive(true)}
              >
                <Ethereum />
                <span className="text-white">{currency}</span>
                <CaretDown />
              </div>
              {isSendChain ? (
                <Input
                  className="text-white border-none bg-transparent text-right"
                  type="number"
                  value={amount}
                  onChange={(e) =>
                    setAmount ? setAmount(Number(e.target.value)) : null
                  }
                />
              ) : (
                <span className="text-white text-xl">{amount}</span>
              )}
            </div>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
      <CurrencySelect
        active={active}
        setActive={setActive}
        currency={currency}
        setCurrency={(value) => {
          setCurrency(value);
          setActive(false);
        }}
      />
      <NetworkSelect
        active={networkActive}
        setActive={setNetworkActive}
        chainId={chainId}
        setChainId={(chainId) => {
          setChainId(chainId);
          setNetworkActive(false);
        }}
      />
    </>
  );
};
