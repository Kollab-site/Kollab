import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import CollaborationImage from "@/assets/collaboration.svg";

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/login/",
        { email, password }
      );
      if (res.status === 200) {
        // Use the login function from AuthContext
        login(res.data.user, res.data.tokens);
        // Show success message and redirect to home page
        setErrorMsg("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center p-4">
      <Container size="lg" className="py-12">
        <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
          {/* Left side - Illustration */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-gray-50 to-white p-12 items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50"></div>
            <img
              src={CollaborationImage}
              alt="Collaboration Illustration"
              className="w-full max-w-md relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right side - Sign In Form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              <CardHeader className="px-0">
                <CardTitle className="text-3xl font-bold text-gray-900">Welcome Back</CardTitle>
                <CardDescription className="text-gray-600 text-lg">Sign in to your account to continue</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 px-0">
                  {errorMsg && (
                    <div className="flex justify-center">
                      <p className={`text-sm font-medium ${
                        errorMsg.includes("successful") 
                          ? "text-green-600" 
                          : "text-red-500"
                      }`}>
                        {errorMsg}
                      </p>
                    </div>
                  )}
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </CardContent>
                <CardFooter className="px-0">
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                    disabled={loading}
                  >
                    Sign In
                  </Button>
                </CardFooter>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
