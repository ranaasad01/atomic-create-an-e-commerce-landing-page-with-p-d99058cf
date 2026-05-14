import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopWave — Modern E-Commerce",
  description: "Discover curated products at unbeatable prices. Electronics, clothing, home goods, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white text-slate-900 antialiased"}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
