import { SUPPORT_NETWORKS } from "@/lib/constant";

interface NetworkSelectProps {
  setActive: (value: boolean) => void;
  active: boolean;
  chainId: number;
  setChainId: (value: number) => void;
  children?: React.ReactNode;
}

export const NetworkSelect = ({
  active,
  setActive,
  children,
  chainId,
  setChainId,
}: NetworkSelectProps) => {
  return (
    <div
      className="relative inline-block"
      onMouseLeave={() => setActive(false)}
    >
      {children}
      {active && (
        <div className="absolute z-20 w-48 py-2 mt-2 origin-bottom-left top-[-40px] right-[55px] bg-white rounded-md shadow-xl dark:bg-gray-800">
          {SUPPORT_NETWORKS.map((network, index) => {
            return (
              <div
                key={index}
                onClick={() => setChainId(network.id)}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              >
                {network.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
