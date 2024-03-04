"use client";

import React from "react";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import Selector from "@/components/layouts/selector";

export default function Home() {
  return (
    <>
      <Navbar className="top-4" />
      <Selector />
      <Footer className="bottom-4" />
    </>
  );
}
