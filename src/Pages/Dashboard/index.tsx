import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";

export const Dashboard = () => {
  const { posts, editiPage, deletePost } = useContext(PostContext);

  return (
    <>
      <main>
        <div>
          <h1>Suas publicações</h1>
          <button>Novo post</button>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <h3>{post.owner}</h3>
              <img src={post.image} alt={post.title} />
              <div>
                <button onClick={() => editiPage(post)}>editar</button>
              </div>
              <div>
                <button type="submit" onClick={() => deletePost(post.id)}>
                  Exluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

