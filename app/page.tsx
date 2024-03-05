"use client";

import React from "react";
import Footer from "@/components/organisms/Footer";
import Selector from "@/components/organisms/Selector";
import { Navbar } from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <>
      <Navbar className="top-4" />
      <Selector />
      <Footer className="bottom-4" />
    </>
  );
}
