import { useMutation } from "@tanstack/react-query"
import { api } from "../axiosInstancy"
 

export const usePut = <T>(path:string) => {
  return useMutation({
    mutationFn: async (data: T) => {
      const response = await api.put(path, data)
      return response.data
    },
  })
}