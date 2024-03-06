import React, { useEffect } from "react";
import { useAccount, useBalance, useChainId, useSwitchChain } from "wagmi";
import { CaretDown, Ethereum } from "@/components/atoms/Icons";
import { Meteors } from "@/components/atoms/Meteors";
import { Input } from "@/components/atoms/Input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownItem } from "@/components/atoms/DropdownItem";
import { getChain } from "@/lib/helper";
import { DECIMAL_FACTOR, SUPPORT_CURRENCIES, SUPPORT_NETWORKS } from "@/lib/constant";

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

  const { switchChain } = useSwitchChain();
  const account = useAccount();
  const result = useBalance({
    address: account.address,
    unit: "ether",
    chainId: isSendChain ? connectedChainId : chainId,
  });

  const onMaxClick = () => {
    if (setAmount) {
      setAmount(Number(Number(result?.data?.formatted).toFixed(6)));
    }
  };

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

              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none focus:ring-0">
                  <div
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Ethereum/>
                    <h6>
                      {getChain(isSendChain ? connectedChainId : chainId).name}
                    </h6>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {
                    SUPPORT_NETWORKS.map((network, index) => {
                      return (
                        <DropdownMenuItem key={index}>
                          <DropdownItem value={network.name} onClick={() => setChainId(network.id)} />
                        </DropdownMenuItem>
                      )
                    })
                  }
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex flex-col border border-white border-opacity-20 py-3 px-4 space-y-4 w-full">
            <div className="flex items-center justify-between w-full text-xs">
              <span className="text-[#9CA3AF]">
                Balance: {account.address ? Number(result?.data?.formatted).toFixed(DECIMAL_FACTOR) : 0}{" "}
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
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none focus:ring-0">
                  <div
                    className="flex items-center space-x-2"
                  >
                    <Ethereum/>
                    <span className="text-white">{currency}</span>
                    <CaretDown/>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {
                    SUPPORT_CURRENCIES.map((currency, index) => {
                      return (
                        <DropdownMenuItem key={index}>
                          <DropdownItem value={currency.name} onClick={() => setCurrency(currency.symbol)} />
                        </DropdownMenuItem>
                      )
                    })
                  }
                </DropdownMenuContent>
              </DropdownMenu>

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
    </>
  );
};
