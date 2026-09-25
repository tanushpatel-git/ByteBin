import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandingButton({
  children,
  href,
  variant = "lime",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "lime" | "dark" | "outline";
}) {
  return (
    <Link className={`lm-button lm-button-${variant}`} href={href}>
      {children}<ArrowRight size={16} strokeWidth={2.2} />
    </Link>
  );
}
