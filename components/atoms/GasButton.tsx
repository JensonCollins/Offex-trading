import React, { useMemo } from "react";
import { useGasPrice } from "wagmi";
import { Button } from "@/components/atoms/MovingBorder";
import { Gas } from "@/components/atoms/Icons";

export const GasButton = () => {
  const gas = useGasPrice()

  const formattedGasPrice = useMemo(() => {
    if (gas?.data) {
      return (Number(gas.data) / 10 ** 9).toFixed(2)
    }
    return 0;
  }, [gas])

  return (
    <Button
      borderRadius="3rem"
      className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xs space-x-2 py-2 px-4"
    >
      <Gas />
      <span>Gas&nbsp;Price:&nbsp;{formattedGasPrice}&nbsp;Gwei</span>
    </Button>
  )
}