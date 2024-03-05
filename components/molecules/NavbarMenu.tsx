"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const MenuItem = ({
  setActive,
  active,
  item,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className={`relative ${item === "Exchange" ? "font-bold" : ""}`}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black text-xs hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn(
        "relative bg-gradient-to-br from-white/10 to-white/5 flex justify-between items-center space-x-4 px-6 py-4",
        className,
      )}
    >
      {children}
    </nav>
  );
};
