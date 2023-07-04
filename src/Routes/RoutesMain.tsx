import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { AllPosts } from "../Pages/AllPosts";
import { Dashboard } from "../Pages/Dashboard";
import { EdditPostPage } from "../Pages/Dashboard/EdditPost";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Register />} />
      <Route path="/allposts" element={<AllPosts />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/eddidpost" element={<EdditPostPage />} />
    </Routes>
  );
};
