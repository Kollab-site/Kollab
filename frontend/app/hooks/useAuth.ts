"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthState, User } from "../types";

export function useAuth() {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        // TODO: Implement actual auth check
        const user = null; // Get from localStorage or API
        setAuthState({
          user,
          isAuthenticated: !!user,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: "Failed to authenticate",
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));
      // TODO: Implement actual login
      const user: User = {
        id: "1",
        name: "Test User",
        email,
        role: "user",
      };
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      router.push("/dashboard");
    } catch (error) {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: "Login failed",
      });
    }
  };

  const logout = () => {
    // TODO: Implement actual logout
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
    router.push("/");
  };

  return {
    ...authState,
    login,
    logout,
  };
}
