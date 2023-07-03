import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register";

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}