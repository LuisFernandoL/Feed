import LoginImg from "../../assets/login-image.png";
import KenzieFeed from "../../assets/kenzie-feed.png"
import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";
import { Container } from "../../Styles/global";
import { StyledMain } from "./style";
import { TitleOne, TitleTwo } from "../../Styles/typography";
import { Button } from "../../Styles/buttons";
import { NewsCard } from "../../Components/NewsCard";

export const Home = () => {

  const { posts } = useContext(PostContext);
  console.log(posts)

  return (
    <Container>
      <StyledMain>
        <section>
          <img src={ KenzieFeed } alt="Imagem Kenzie/Feed" /> 
          <TitleOne>Seja muito bem vindo ao KenzieFeed</TitleOne>
          <p>Fique por dentro das últimas notícias</p>
          <img src={LoginImg} alt="" />
        </section>
        <Container> 
          <div className="flex-between">
            <TitleTwo>últimas notícias</TitleTwo>
            <Button variant="primary" width="122px">Acessar</Button>
          </div>
        </Container>
          <ul>
            {posts.map((post) => (
              <NewsCard key={post.id} {...post}/>
            ))}
          </ul>
      </StyledMain>
    </Container>
  );
};
