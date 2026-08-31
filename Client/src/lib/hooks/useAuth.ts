import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => api.get("/api/me").then((res) => res.data.user),
    retry: false,
  });
}

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: { email: string; password?: string }) =>
      api.post("/api/login", data).then((res) => res.data.user),
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export function useRegisterMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: { name: string; email: string; password?: string }) =>
      api.post("/api/createMe", data).then((res) => res.data.user),
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

