import { motion } from "framer-motion";
import React from "react";

export default function Logo() {
  return (
    <motion.p
      transition={{ duration: 0.3 }}
      className="cursor-pointer text-xl text-black dark:text-[#D1FAE5]"
    >
      Offex
    </motion.p>
  );
}
