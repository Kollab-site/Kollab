"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement forgot password logic
    console.log("Forgot password form submitted:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full space-y-8"
        >
          <SectionHeader
            title="Reset your password"
            subtitle="Enter your email address and we'll send you instructions to reset your password"
          />
          <Card className="bg-white">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Reset Password
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Check your email
                </h3>
                <p className="text-sm text-gray-500">
                  We've sent password reset instructions to your email address.
                </p>
                <Link
                  href="/login"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Return to login
                </Link>
              </div>
            )}
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}
