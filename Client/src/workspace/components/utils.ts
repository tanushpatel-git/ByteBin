import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLanguageColor(language: string): string {
  const map: Record<string, string> = {
    tsx: "#3178C6",
    ts: "#3178C6",
    js: "#F7DF1E",
    jsx: "#61DAFB",
    css: "#8B5CF6",
    json: "#F59E0B",
    md: "#6B7280",
  };
  return map[language.toLowerCase()] ?? "#6B7280";
}

export function getDependencyStatusColor(
  status: "up-to-date" | "outdated" | "critical"
): string {
  switch (status) {
    case "up-to-date":
      return "text-emerald-600 bg-emerald-50";
    case "outdated":
      return "text-amber-600 bg-amber-50";
    case "critical":
      return "text-red-600 bg-red-50";
  }
}

export function getCommitStatusColor(
  status: "success" | "pending" | "failed"
): string {
  switch (status) {
    case "success":
      return "text-emerald-600";
    case "pending":
      return "text-amber-500";
    case "failed":
      return "text-red-500";
  }
}
