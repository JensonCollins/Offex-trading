import { SUPPORT_CURRENCIES } from "@/utils/constant";
import { Ethereum } from "@/components/atoms/Icons";

interface CurrencySelectProps {
  active: boolean;
  setActive: (value: boolean) => void;
  currency: string;
  setCurrency: (value: string) => void;
  children?: React.ReactNode;
}

export const CurrencySelect = ({ active, setActive, currency, setCurrency, children }: CurrencySelectProps) => {
  return (
    <div className="relative inline-block" onMouseLeave={() => setActive(false)}>
      {children}
      {
        active &&
          <div
              className="absolute z-20 w-48 py-2 mt-2 origin-bottom-left top-[50px] right-[160px] bg-white rounded-md shadow-xl dark:bg-gray-800"
          >
            {
              SUPPORT_CURRENCIES.map((currency, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setCurrency(currency.name)}
                    className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                  >
                    <Ethereum />
                    <span>{currency.name}</span>
                  </div>
                )
              })
            }
          </div>
      }
    </div>
  )
}