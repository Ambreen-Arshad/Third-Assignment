import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


// Load Inter font with weights from 100 to 900 and set CSS variable names
const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  weight: ["100", "900"], // Define the font weights you need
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
  
        {children}
      </body>
    </html>
  );
}