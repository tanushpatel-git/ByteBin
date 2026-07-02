import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: { email: string; password?: string }) =>
      api.post("/api/login", data).then((res) => res.data.user),
    onSuccess: () => {
      router.push("/");
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
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
