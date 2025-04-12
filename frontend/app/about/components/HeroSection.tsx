"use client";

import { motion } from "framer-motion";
import { Container } from "../../components/ui/Container";
import { SectionHeader } from "../../components/ui/SectionHeader";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: "5rem 0" }}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              backgroundColor: "#EEF2FF",
              color: "#4F46E5",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginBottom: "1.5rem",
              display: "inline-block",
            }}
          >
            Our Story
          </motion.div>
          <SectionHeader
            title="About Reachly"
            subtitle="We're revolutionizing influencer marketing by connecting brands with the perfect influencers through AI-powered technology."
          />
        </div>
      </Container>
    </motion.section>
  );
}
