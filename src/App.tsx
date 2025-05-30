import { Route,Routes } from "react-router-dom"
import { LoginPage } from "./pages/auth/login"
import { RegisterPage } from "./pages/auth/register"
import { SubscriptionPage } from "./pages/subscription"
import { DashboardPage } from "./pages/dashboard"
import { VerifyAccountPage } from "./pages/auth/verification/verify-account"
import { RequestVerifyAccountPage } from "./pages/auth/verification/request-verification"
import { ForgotPasswordPage } from "./pages/auth/forgot-password/send-token"
import { ResetPasswordPage } from "./pages/auth/forgot-password/reset-password"
import { CustomerPage } from "./pages/customer"
import { ConfigPage } from "./pages/config"
import { SignaturesPage } from "./pages/signatures"

const App =()=> {
  
  return (
    <Routes>
      <Route element={<LoginPage/>} path="/" />
      <Route element={<DashboardPage/>} path="/dashboard" />
      <Route element={<RegisterPage/>} path="/register" />
      <Route element={<SubscriptionPage/>} path="/subscription" />
      <Route element={<RequestVerifyAccountPage/>} path="/request-verify-account" />
      <Route element={<VerifyAccountPage/>} path="/verify-account" />
      <Route element={<ForgotPasswordPage/>} path="/forgot-password" />
      <Route element={<ResetPasswordPage/>} path="/reset-password" />
      <Route element={<CustomerPage/>} path="/clientes" />
      <Route element={<ConfigPage/>} path="/configuracoes" />
      <Route element={<SignaturesPage/>} path="/assinaturas" />
    </Routes>
  )
}

export default App
