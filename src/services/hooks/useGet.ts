import { useQuery } from "@tanstack/react-query";
import { api } from "../axiosInstancy";


export const useGet = <T>(path: string) => {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      const response = await api.get<T>(path);
      return response.data;
    },
    refetchInterval: 1000
  });
};



type Params = Record<string, any>;

export const useGetWithParams = <T>(path: string, params?: Params) => {
  return useQuery({
    queryKey: [path, params], // Dependência do cache considera os parâmetros
    queryFn: async () => {
      const response = await api.get<T>(path, { params });
      return response.data;
    },
    placeholderData: (previousData) => previousData,
    refetchInterval: 1000,
  });
};