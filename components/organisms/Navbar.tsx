import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Menu, MenuItem } from "@/components/molecules/NavbarMenu";
import Logo from "@/components/atoms/Logo";
import { ThemeSwitch } from "@/components/molecules/ThemeSwitch";
import { CustomConnectButton } from "@/components/atoms/CustomConnectButton";

export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed inset-x-0 w-full mx-auto z-50 px-6", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between space-x-6">
          <Logo />
          <MenuItem setActive={setActive} active={active} item="Exchange" />
          <MenuItem setActive={setActive} active={active} item="Pools" />
          <MenuItem setActive={setActive} active={active} item="Dashboard" />
        </div>
        <div className="flex items-center justify-between space-x-6">
          <CustomConnectButton />
          <ThemeSwitch />
        </div>
      </Menu>
    </div>
  );
}
