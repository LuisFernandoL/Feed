import { useContext } from "react";
import { PostContext } from "../../Provider/PostContext";
import { Container } from "../../Styles/global";
import { TitleTwo } from "../../Styles/typography";
import { Header } from "../../Components/Header";
import { StyledUl, StyledDiv } from "./style";
import { Footer } from "../../Components/Footer";
import { NewsCard } from "../Home/NewsCard";


export const AllPosts = () => {
  const { posts } = useContext(PostContext);

  return (
    <>
      <Header />
      <Container>
        <StyledDiv>
          <TitleTwo>Todas as notícias</TitleTwo>
          <StyledUl>
            {posts.map((post) => <NewsCard key={post.id} post={post}/>)}
          </StyledUl>
        
        </StyledDiv>
        <Footer variant="fixed"/>
      </Container>
    </>
  );
};
