import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",});

export const metadata = {
  title: "Subhanjan Baral | Portfolio",
  description: "Computer Science and Mathematics major at Gettysburg College. Passionate about technology, education, and community engagement. Explore my projects and connect with me.",
  keywords: ["Subhanjan Baral", "Portfolio", "Computer Science", "Software Developer", "Web Developer", "Gettysburg College"],
  authors: [{ name: "Subhanjan Baral" }],
  openGraph: {
    title: "Subhanjan Baral | Portfolio",
    description: "Computer Science and Mathematics major at Gettysburg College. Explore my projects and connect with me.",
    type: "website",
  },
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
