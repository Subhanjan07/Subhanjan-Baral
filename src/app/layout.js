import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",});

export const metadata = {
  title: "Subhanjan Baral",
  description: "Welcome to Subhanjan Baral's personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
        </body>
    </html>
  );
}
