import { useMutation } from "@tanstack/react-query"
import { api } from "./axiosInstancy"
import { useEffect } from "react"
 

export const usePostMutation = <T>(path:string) => {
  return useMutation({
    mutationFn: async (data: T) => {
      const response = await api.post(path, data)
      return response.data
    },
  })
}

export const usePostAuto = <T, R = any>(path: string, data: T) => {
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await api.post<R>(path, data);
      return response.data;
    },
  });

  useEffect(() => {
    if (data) {
      mutation.mutate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mutation;
};


