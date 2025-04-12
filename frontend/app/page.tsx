"use client";

import { motion } from "framer-motion";
import { Container } from "./components/ui/Container";
import { Card } from "./components/ui/Card";
import { Grid } from "./components/ui/Grid";
import { SectionHeader } from "./components/ui/SectionHeader";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { Features } from "./components/sections/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <main>
        <Hero />
        <Stats />
        <Features />
      </main>
    </div>
  );
}
