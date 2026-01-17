import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/src/ClientLayoutWrapper";
import { Toaster } from "react-hot-toast";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cinzel.variable} ${lato.variable} antialiased bg-[var(--background)] relative`}
      >
        <ClientLayoutWrapper>
          {/* <Navbar onRegisterClick={() => setOpen(true)} />
          <RegisterModal open={open} onClose={() => setOpen(false)} /> */}
          {children}
          <Toaster position="top-right" reverseOrder={false} />
          {/* <ContactModal />
          <Footer /> */}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
