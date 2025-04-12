"use client";

import { Navbar } from "./components/navigation/Navbar";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { Features } from "./components/sections/Features";
import { Footer } from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Stats />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
