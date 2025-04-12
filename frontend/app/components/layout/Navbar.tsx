"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span
                className={`text-xl font-bold ${
                  isScrolled ? "text-white" : "text-indigo-600"
                }`}
              >
                Reachly
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex sm:space-x-6">
              <Link
                href="/about"
                className={`${
                  isScrolled
                    ? "text-white hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`${
                  isScrolled
                    ? "text-white hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Contact
              </Link>
            </div>
            <Link
              href="/login"
              className={`${
                isScrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className={`${
                isScrolled
                  ? "bg-white text-indigo-600 hover:bg-gray-100"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } px-4 py-2 rounded-md text-sm font-medium`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
