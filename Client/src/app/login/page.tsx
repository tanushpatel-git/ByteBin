import type { Metadata } from "next";
import AuthPage from "@/components/organisms/Auth/AuthPage";

export const metadata: Metadata = { title: "Log in — ByteBin", description: "Log in to your ByteBin developer workspace." };

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
