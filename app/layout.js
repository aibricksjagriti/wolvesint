import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/Home/Navbar";
import Footer from "@/src/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"], // normal & bold
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Live The Future",
  description: "Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${lato.variable} antialiased bg-[var(--background)]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
