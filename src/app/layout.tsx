import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejandro De La Mora | AI Advisor & GenAI Architect",
  description:
    "AI Solutions Architect focused on retail and compliance programs. 15+ years blending Salesforce, automation, and GenAI for production workloads.",
  openGraph: {
    title: "Alejandro De La Mora | AI Advisor",
    description:
      "Retail-focused GenAI architect with 100+ launches and a services-first background.",
    url: "https://www.eloruga.com",
    siteName: "Alejandro De La Mora | Infocepts AI Advisor Fit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
