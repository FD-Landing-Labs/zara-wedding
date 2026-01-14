import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import FloatingBadge from "@/components/FloatingBadge";
import { LenisProvider } from "@/components/providers/lenis-provider";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shanoory - Luxury Wedding Floral Design",
  description: "Transform your wedding with breathtaking floral arrangements. Luxury wedding florals, bouquets, ceremony decor, and reception styling by Shanoory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`} suppressHydrationWarning>
        <LenisProvider>
          {children}
          <FloatingBadge />
        </LenisProvider>
      </body>
    </html>
  );
}
