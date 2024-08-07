import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'

// const inter = Inter({ subsets: ["latin"] });
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable :'--font-sans'
});

export const metadata: Metadata = {
  title: "Careplus ",
  description: "Health management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-3000 font-sans antialiased',fontSans.variable)}>{children}</body>
      {/* cn as short of class name  passs all classes you will wana call*/}
    </html>
  );
}
