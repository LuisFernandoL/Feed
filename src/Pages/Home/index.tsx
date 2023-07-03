import LoginImg from "../../assets/loginimg.svg";
import KenzieFeed from "../../assets/kenzieFeed.png";
import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";

export const Home = () => {

  const { posts } = useContext(PostContext);
  console.log(posts)

  return (
    <>
     <img src={ KenzieFeed } alt="Imagem Kenzie/Feed" /> 
      <h1>Seja muito bem vindo ao KenzieFeed</h1>
      <p>Fique por dentro das últimas notícias</p>
      <img src={LoginImg} alt="" />
      <h2>últimas notícias</h2>
      <ul>
        {posts.map((post) => (
            <li key={post.id}>
              <img src={post.image} alt={post.title} />
              <h1>{post.title}</h1>
              <h3>{post.owner}</h3>
            </li>
          ))}
      </ul>
    </>
  );
};
