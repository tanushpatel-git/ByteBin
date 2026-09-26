import type { Metadata } from "next";
import AuthPage from "@/components/organisms/Auth/AuthPage";

export const metadata: Metadata = { title: "Create account — ByteBin", description: "Create a ByteBin account and start building." };

export default function RegisterPage() {
  return <AuthPage mode="register" />;
}
