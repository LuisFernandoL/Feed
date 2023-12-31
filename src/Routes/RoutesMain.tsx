import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home";
import { PublicRoutes } from "../Components/ProtectedRoutes/Public";
import { ProtectedRoutes } from "../Components/ProtectedRoutes";
import { Dashboard } from "../Pages/Dashboard";
import { EdditPostPage } from "../Pages/Dashboard/EdditPost";
import { Route, Routes } from "react-router-dom";

import { AllPosts } from "../Pages/AllPosts";
import { InternalPage } from "../Pages/InternalPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Register />} />
      </Route>

      <Route path="/home" element={<Home />} />
      <Route path="/posts" element={<AllPosts />} />
      
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/eddidpost" element={<EdditPostPage />} />
        <Route path="/posts/:id" element={<InternalPage />} />
      </Route>
    </Routes>
  );
};

