import React, { useState } from "react";
import { cn } from "@/lib/cn";
import { Menu, MenuItem } from "@/components/molecules/NavbarMenu";
import Logo from "@/components/atoms/Logo";

export default function Footer({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed inset-x-0 w-full mx-auto z-50 px-2 md:px-6", className)}>
      <Menu setActive={setActive} className="px-4 md:px-8">
        <div className="flex items-center justify-between space-x-6">
          <Logo />
        </div>
        <div className="flex items-center justify-between space-x-6">
          <MenuItem setActive={setActive} active={active} item="Docs" />
          <MenuItem setActive={setActive} active={active} item="Analytics" />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Terms of Service"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Privacy Policy"
          />
        </div>
      </Menu>
    </div>
  );
}
