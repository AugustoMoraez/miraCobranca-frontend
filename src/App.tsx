import { Route,Routes } from "react-router-dom"
import { LoginPage } from "./pages/auth/login"
import { RegisterPage } from "./pages/auth/register"
import { SubscriptionPage } from "./pages/subscription"

const App =()=> {
  
  return (
    <Routes>
      <Route element={<LoginPage/>} path="/" />
      <Route element={<RegisterPage/>} path="/register" />
      <Route element={<SubscriptionPage/>} path="/subscription" />
    </Routes>
  )
}

export default App
