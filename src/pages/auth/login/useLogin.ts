import { useMutation } from "@tanstack/react-query"
import { api } from "../../../service/axiosInstancy"

type LoginData = {
  email: string
  password: string
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await api.post("/auth/login", data)
      return response.data
    },
  })
}
