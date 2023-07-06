import LoginImg from "../../assets/login-image.png";
import KenzieFeed from "../../assets/kenzie-feed.png";
import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";
import { Container } from "../../Styles/global";
import { StyledMain } from "./style";
import { TitleOne, TitleTwo } from "../../Styles/typography";
import { Button } from "../../Styles/buttons";
import { NewsCard } from "../../Components/NewsCard";
import { Header } from "../../Components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { AllPosts } from "../AllPosts";

export const Home = () => {
  const { posts } = useContext(PostContext);
  console.log(posts);

  return (
    <>
      <Header />
      <Container>
        <StyledMain>
          <section>
            <img src={KenzieFeed} alt="Imagem Kenzie/Feed" />
            <TitleOne>Seja muito bem vindo ao KenzieFeed</TitleOne>
            <p>Fique por dentro das últimas notícias</p>
            <img src={LoginImg} alt="" />
          </section>
          <div className="flex-between">
            <TitleTwo>Últimas notícias</TitleTwo>
            <Link to={"/posts"}>
              <Button variant="primary" width="122px">Ver Tudo</Button>
            </Link>
          </div>
          <ul>
            {posts.map(post => <NewsCard key={post.id} post={post}/>)}
          </ul>
        </StyledMain>
        <Footer/>
      </Container>
    </>
  );
};
