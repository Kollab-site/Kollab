"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
