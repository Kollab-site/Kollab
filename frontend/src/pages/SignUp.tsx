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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const SignUp = () => {
  const [role, setRole] = useState("brand");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Role:", role);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Container size="sm" className="py-12">
        <Card className="w-full max-w-lg mx-auto bg-white shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-[1.005] focus-within:scale-[1.005]">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Sign up as Brand or Influencer to get started with Kollab
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Registering As</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brand">Brand</SelectItem>
                    <SelectItem value="influencer">Influencer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="First name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Last name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all"
              >
                Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
              </Button>
              <p className="text-sm text-center text-gray-700">
                Already have an account?{" "}
                <Link to="/signin" className="text-purple-600 font-semibold underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
