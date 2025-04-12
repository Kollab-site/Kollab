"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  const baseClasses = "p-8 bg-white rounded-xl shadow-sm transition";
  const hoverClasses = hoverEffect ? "hover:shadow-md" : "";

  if (hoverEffect) {
    return (
      <motion.div
        whileHover={{ y: -10 }}
        className={`${baseClasses} ${hoverClasses} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
}
