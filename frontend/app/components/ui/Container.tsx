"use client";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function Container({
  children,
  className = "",
  maxWidth = "lg",
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
  };

  return (
    <div
      className={`container mx-auto px-4 ${maxWidthClasses[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
}
