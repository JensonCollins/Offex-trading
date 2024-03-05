import React from "react";
import { Button } from "@/components/atoms/MovingBorder";
import Gas from "@/components/atoms/icons/Gas";
import Settings from "@/components/atoms/icons/Settings";
import Ethereum from "@/components/atoms/icons/Ethereum";
import { Meteors } from "@/components/atoms/Meteors";

export default function Selector() {
  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="h-screen w-1/2 relative flex flex-col items-center justify-center space-y-12">
        <div className="flex items-center justify-between w-full">
          <Button
            borderRadius="3rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xs space-x-2 py-2 px-4"
          >
            <Gas />
            <span>Gas&nbsp;Price:&nbsp;24&nbsp;Gwei</span>
          </Button>
          <Settings />
        </div>
        <div className="flex justify-between items-center space-x-2 w-full">
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-4 h-full overflow-hidden rounded-none flex flex-col space-y-4 justify-end items-start">
              <div className="flex w-full justify-between items-end px-4 text-white">
                <h6>Selling</h6>
                <div className="flex flex-col items-end text-white-600">
                  <span className="text-xs">Network</span>
                  <div className="flex items-center space-x-2">
                    <Ethereum />
                    <h6>Ethereum</h6>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border border-white border-opacity-20 py-3 px-4 space-y-4 w-full">
                <div className="flex items-center justify-between w-full text-xs">
                  <span className="text-[#9CA3AF]">Balance: 10.4893 ETH</span>
                  <button className="text-[#60A5FA]">Select Max</button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#9CA3AF]">ETH</span>
                  <span className="text-[#60A5FA]">5.754</span>
                </div>
              </div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
          <span className="text-xl text-[#9CA3AF]">X</span>
          <div className=" w-full relative max-w-md">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-4 h-full overflow-hidden rounded-none flex flex-col space-y-4 justify-end items-start">
              <div className="flex w-full justify-between items-end px-4 text-white">
                <h6>Buying</h6>
                <div className="flex flex-col items-end text-white-600">
                  <span className="text-xs">Network</span>
                  <div className="flex items-center space-x-2">
                    <Ethereum />
                    <h6>Avalanche</h6>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border border-white border-opacity-20 py-3 px-4 space-y-4 w-full">
                <div className="flex items-center justify-between w-full text-xs">
                  <span className="text-[#9CA3AF]">Balance: 10.4893 ETH</span>
                  <button className="text-[#60A5FA]">Select Max</button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#9CA3AF]">ETH</span>
                  <span className="text-[#60A5FA]">5.754</span>
                </div>
              </div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <div className="w-60 py-6 px-8 flex flex-col justify-between bg-[#101217] text-[#9CA3AF] text-xs">
              <div className="text-white flex justify-between">
                <span>Equiv.</span>
                <span>$20,538.75</span>
              </div>
              <div className="flex justify-between">
                <span>Rate</span>
                <span>17.48</span>
              </div>
              <div className="flex justify-between">
                <span>Slippage</span>
                <span className="text-[#6EE7B7]">0.00%</span>
              </div>
              <div className="flex justify-between">
                <span>Gas Estimate</span>
                <span className="text-[#6EE7B7]">$1.23</span>
              </div>
            </div>
            <div className="w-60 py-6 px-8 flex flex-col justify-between bg-[#101217] text-[#9CA3AF] text-xs">
              <div className="text-white flex justify-between">
                <span>Competitor’s Quote</span>
              </div>
              <div className="flex justify-between">
                <span>Rate</span>
                <span>-</span>
              </div>
              <div className="flex justify-between">
                <span>Slippage</span>
                <span>-</span>
              </div>
              <div className="flex justify-between">
                <span>Gas Estimate</span>
                <span>-</span>
              </div>
            </div>
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
