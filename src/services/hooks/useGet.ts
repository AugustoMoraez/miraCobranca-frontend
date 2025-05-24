import { useQuery } from "@tanstack/react-query";
import { api } from "./axiosInstancy";


export const useGet = <T>(path: string) => {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      const response = await api.get<T>(path);
      return response.data;
    },
  });
};
