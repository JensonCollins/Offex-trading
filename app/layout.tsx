import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WrapProvider from "@/components/contexts/wrapProvider";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Offex",
  description: "Full Stack Developer Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " h-screen"}>
        <WrapProvider>{children}</WrapProvider>
      </body>
    </html>
  );
}
