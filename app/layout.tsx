import type { Metadata } from "next";
import { Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KERALA HOMES & DEVELOPERS PVT. LTD. | Building the Future",
  description:
    "Official corporate site of Kerala Homes & Developers Pvt. Ltd. Leading builders in Kerala specializing in turnkey residential villas, commercial high-rises, master plan engineering consultancy, and architectural design.",
  keywords: [
    "Kerala Homes",
    "Kerala Homes & Developers",
    "Builders in Kerala",
    "Pathanamthitta Construction",
    "Master Plan Engineering",
    "Innovature Designs",
    "Luxury Villas Kerala",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${workSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7FAF3] text-[#1B1C1C]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
