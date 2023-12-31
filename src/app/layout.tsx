import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuizMe",
  description: "Quiz Yourself on Anything",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
        <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
      </Providers>

        </body>
    </html>
  );
}
