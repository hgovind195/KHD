import type { Metadata } from "next";
import { Montserrat, Work_Sans, Playfair_Display, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "800"],
  style: ["normal"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KERALA HOMES & DEVELOPERS PVT. LTD. | Building the Future",
  description:
    "Official corporate site of Kerala Homes & Developers Pvt. Ltd. Leading builder in Kerala specializing in turnkey residential villas, commercial high-rises, master plan engineering consultancy, and architectural design.",
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
      className={`${montserrat.variable} ${workSans.variable} ${playfair.variable} ${cinzel.variable} ${cormorant.variable} h-full antialiased overflow-x-hidden max-w-full w-full`}
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto,w_1600/v1787673057/ChatGPT_Image_Aug_25_2026_08_17_21_PM_bejzbi.png"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7FAF3] text-[#1B1C1C] overflow-x-hidden max-w-full w-full relative">
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
