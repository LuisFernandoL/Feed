import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";

export const AllPosts = () => {
  const { posts } = useContext(PostContext);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
            <h3>{post.owner}</h3>
            <img src={post.image} alt={post.title} />
           <p >{post.likes.length}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
