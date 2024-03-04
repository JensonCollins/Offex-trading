import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WrapProvider from "@/components/WrapProvider";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';

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
    <html lang="en">
      <body className={inter.className}>
        <WrapProvider>
          {children}
        </WrapProvider>
      </body>
    </html>
  );
}
