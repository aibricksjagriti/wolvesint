"use client";

import { useState } from "react";
import Navbar from "./Home/Navbar";
import RegisterModal from "./Auth/RegisterModal";
import ContactModal from "./Modal/ContactModal";
import Footer from "./Footer";
import ClientLayout from "./ClientLayout";

export default function ClientLayoutWrapper({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <ClientLayout>
      <Navbar onRegisterClick={() => setOpen(true)} />
      <RegisterModal open={open} onClose={() => setOpen(false)} />
      {children}
      <ContactModal />
      <Footer />
    </ClientLayout>
  );
}
