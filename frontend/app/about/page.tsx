"use client";

import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "./components/HeroSection";
import { MissionSection } from "./components/MissionSection";
import { ValuesSection } from "./components/ValuesSection";
import { TeamSection } from "./components/TeamSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
}
