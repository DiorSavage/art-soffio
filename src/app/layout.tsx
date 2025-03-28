import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ReduxProvider } from "./_provider/ReduxProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Art Soffio',
  icons: '/icon_kosmetic.png'
}

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[#555555]`}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
