import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./contexts/CartContext";
import { Navbar } from "@/components/Navbar";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export const metadata: Metadata = {
  title: "Montessori Haven",
  description: "Quality Montessori products for your child's development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <TooltipProvider>
            <Navbar />
            {children}
          </TooltipProvider>
        </CartProvider>
      </body>
    </html>
  );
}
