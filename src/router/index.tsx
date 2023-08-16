import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import App from "../App";
import PrivateRoute from "./auth-guard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />,
        <Route path="/register" element={<RegisterPage />} />,
        <Route path="/" element={<PrivateRoute><App /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}



