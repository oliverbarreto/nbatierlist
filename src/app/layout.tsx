import type { Metadata } from "next";
import "./globals.css";
import {inter} from "@/config/fonts"


export const metadata: Metadata = {
  title: "NBA Tier List",
  description: "NBA Tier List | Made with ❤️ by Oliver Barreto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"${inter.className}"}>
        {children}
      </body>
    </html>
  );
}
