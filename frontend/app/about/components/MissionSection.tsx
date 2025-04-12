"use client";

import { motion } from "framer-motion";
import { Users, Target, BarChart2, Globe } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              At Reachly, we believe in the power of authentic connections
              between brands and influencers. Our mission is to make influencer
              marketing more accessible, transparent, and effective for
              businesses of all sizes.
            </p>
            <p className="text-gray-600">
              We're committed to helping brands find their perfect influencer
              match while providing influencers with meaningful opportunities to
              collaborate with brands that align with their values and audience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "#EEF2FF",
              padding: "2rem",
              borderRadius: "1rem",
            }}
          >
            <div className="grid grid-cols-2 gap-6">
              <StatCard
                icon={<Users size={32} />}
                value="10,000+"
                label="Active Influencers"
              />
              <StatCard
                icon={<Target size={32} />}
                value="5,000+"
                label="Brands"
              />
              <StatCard
                icon={<BarChart2 size={32} />}
                value="$50M+"
                label="Campaign Value"
              />
              <StatCard
                icon={<Globe size={32} />}
                value="50+"
                label="Countries"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
