import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name: string;
    role: "brand" | "influencer";
  }

  interface Session {
    user: User & {
      role: "brand" | "influencer";
    };
  }
}
