import { cn } from "@/lib/cn";

interface DropdownItemProps {
  value: string;
  className?: string;
  onClick: () => void;
}

export const DropdownItem = ({
  value,
  className,
  onClick
}: DropdownItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center w-full py-1 rounded-lg bg-primary-500 text-white",
        className
      )}
    >
      {value}
    </button>
  );
}