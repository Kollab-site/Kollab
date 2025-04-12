"use client";

import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  className?: string;
}

export function Icon({
  icon: IconComponent,
  size = 24,
  color = "currentColor",
  className = "",
}: IconProps) {
  return <IconComponent size={size} color={color} className={className} />;
}
