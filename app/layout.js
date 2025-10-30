// import { Cinzel, Lato } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/src/Home/Navbar";
// import Footer from "@/src/Footer";

// const cinzel = Cinzel({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   weight: ["400", "700"], // normal & bold
// });

// const lato = Lato({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   weight: ["300", "400", "700"],
// });

// export const metadata = {
//   title: "Live The Future",
//   description: "Coming Soon",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${cinzel.variable} ${lato.variable} antialiased bg-[var(--background)]`}
//       >
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Cinzel, Lato } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/src/Home/Navbar";
// import Footer from "@/src/Footer";
// import Loader from "@/src/Loader";

// const cinzel = Cinzel({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   weight: ["400", "700"], // normal & bold
// });

// const lato = Lato({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   weight: ["300", "400", "700"],
// });

// // export const metadata = {
// //   title: "Live The Future",
// //   description: "Coming Soon",
// // };

// export default function RootLayout({ children }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => setLoading(false);

//     // If page is already loaded, hide loader immediately
//     if (document.readyState === "complete") {
//       setLoading(false);
//     } else {
//       window.addEventListener("load", handleLoad);
//       return () => window.removeEventListener("load", handleLoad);
//     }
//   }, []);

//   return (
//     <html lang="en">
//       <body
//         className={`${cinzel.variable} ${lato.variable} antialiased bg-[var(--background)] relative`}
//       >
//         {loading && <Loader />} {/* ✅ Loader visible until full load */}
//         <div
//           className={
//             loading
//               ? "opacity-0"
//               : "opacity-100 transition-opacity duration-700"
//           }
//         >
//           <Navbar />
//           {children}
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }

import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/Home/Navbar";
import Footer from "@/src/Footer";
import ClientLayout from "@/src/ClientLayout";

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
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
