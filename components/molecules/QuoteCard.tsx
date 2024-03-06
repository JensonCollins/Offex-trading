import React from "react";

interface QuoteCardProps {
  title: string;
  equiv?: string;
  rate?: string;
  slippage?: string;
  gasEstimate?: string;
}

export const QuoteCard = ({
  title,
  equiv,
  rate = "-",
  slippage = "-",
  gasEstimate = "-"
}: QuoteCardProps) => {
  return (
    <div className="w-60 py-6 px-8 flex flex-col justify-between bg-[#101217] text-[#9CA3AF] text-xs">
      <div className="text-white flex justify-between">
        <span>{title}</span>
        {
          equiv && <span>{equiv}</span>
        }
      </div>
      <div className="flex justify-between">
        <span>Rate</span>
        <span>{rate}</span>
      </div>
      <div className="flex justify-between">
        <span>Slippage</span>
        <span className={slippage != "-" ? "text-[#6EE7B7]" : ""}>{slippage}</span>
      </div>
      <div className="flex justify-between">
        <span>Gas Estimate</span>
        <span className={gasEstimate != "-" ? "text-[#6EE7B7]" : ""}>{gasEstimate}</span>
      </div>
    </div>
  )
}
