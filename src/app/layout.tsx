import "./globals.css";
import type { Metadata } from "next";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Scheddy",
  description: "Scheddy – scheduling without the chaos.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans">
        <MarketingHeader /> 
        <main className="mx-auto px-4 lg:px-0">{children}</main>
        <MarketingFooter />
      </body>
    </html>
  );
}
