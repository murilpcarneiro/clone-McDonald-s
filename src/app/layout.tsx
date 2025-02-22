import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import { CartProvider } from "./[slug]/menu/contexts/cart";

const poppings = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "McDonald's",
  description: "The best fast food in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppings.className}antialiased bg-slate-100`}
      >
        <CartProvider>{children}</CartProvider>

        <Toaster />
      </body>
    </html>
  );
}
