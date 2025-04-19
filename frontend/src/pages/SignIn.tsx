import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const SignIn = () => {
  const [role, setRole] = useState("brand");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle sign-in based on selected role
    console.log("Logging in as:", role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-purple-400 to-pink-400 flex items-center justify-center">
      <Container size="sm" className="py-12">
      <Card className="w-full max-w-lg mx-auto bg-white/20 backdrop-blur-md shadow-xl border border-white/30 transition-transform duration-300 transform hover:scale-[1.005] focus-within:scale-[1.005]">
      <CardHeader className="text-white">
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription className="text-sm text-white/80">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white" htmlFor="role">Logging in As</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="bg-white/60 text-black">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="brand">Brand</SelectItem>
                    <SelectItem value="influencer">Influencer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-white" htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label className="text-white" htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-white text-purple-700 hover:bg-purple-600 hover:text-white transition-all">
                Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
              </Button>
              <p className="text-sm text-center text-white/90">
                Don't have an account?{" "}
                <Link to="/signup" className="text-white font-semibold underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
