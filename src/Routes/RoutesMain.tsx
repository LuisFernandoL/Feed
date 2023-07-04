import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home";
import { PublicRoutes } from "../Components/ProtectedRoutes/Public";
import { ProtectedRoutes } from "../Components/ProtectedRoutes";
import { Dashboard } from "../Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import { EdditPostPage } from "../Pages/Dashboard/EdditPost";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/eddidpost" element={<EdditPostPage />} />
      </Route>
    </Routes>
  );
};
