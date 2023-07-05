import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";
import { Container } from "../../Styles/global";
import { TitleTwo } from "../../Styles/typography";
import { Header } from "../../Components/Header";

export const AllPosts = () => {
  const { posts } = useContext(PostContext);

  return (
    <>
      <Header />
      <Container>
        <TitleTwo>Todas as notícias</TitleTwo>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <h2>{post.description}</h2>
              <h3>{post.owner}</h3>
              <img src={post.image} alt={post.title} />
              <p>{post.likes.length}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};
