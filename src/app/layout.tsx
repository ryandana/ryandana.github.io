import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AnimatedThemeToggler } from "@/components/ui/AnimatedThemeToggler";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import SocialBubble from "@/components/ui/SocialBubble";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ryan Dana",
  description: "Welcome to my Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider attribute={"class"} enableSystem={true}>
          <ScrollProgress className="top-0" />
          {children}
          <AnimatedThemeToggler className="bg-secondary text-secondary-foreground p-2 rounded-full  cursor-pointer fixed top-5 right-5" />
          <SocialBubble />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
