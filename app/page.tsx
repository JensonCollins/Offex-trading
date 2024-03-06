"use client";

import React from "react";
import Footer from "@/components/organisms/Footer";
import Selector from "@/components/organisms/Selector";
import { Navbar } from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <>
      <Navbar className="top-2 md:top-4" />
      <Selector />
      <Footer className="bottom-2 md:bottom-4" />
    </>
  );
}
