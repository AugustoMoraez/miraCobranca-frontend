import { useMutation } from "@tanstack/react-query"
import { api } from "./axiosInstancy"

 

export const usePost = <T>(path:string) => {
  return useMutation({
    mutationFn: async (data: T) => {
      const response = await api.post(path, data)
      return response.data
    },
  })
}
