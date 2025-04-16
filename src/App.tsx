import { Route,Routes } from "react-router-dom"
import { LoginPage } from "./pages/auth/login"
import { RegisterPage } from "./pages/auth/register"

const App =()=> {
  
  return (
    <Routes>
      <Route element={<LoginPage/>} path="/" />
      <Route element={<RegisterPage/>} path="/register" />
    </Routes>
  )
}

export default App
