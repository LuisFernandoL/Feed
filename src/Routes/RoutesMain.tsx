import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home";
export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}