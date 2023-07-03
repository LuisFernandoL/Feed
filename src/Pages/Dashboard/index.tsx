import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";

export const Dashboard = () => {
  const { posts } = useContext(PostContext);
  console.log(posts)
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};
