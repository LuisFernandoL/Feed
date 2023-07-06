import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";
import { Container } from "../../Styles/global";
import { TitleTwo } from "../../Styles/typography";
import { Header } from "../../Components/Header";
import { AllPostsCards } from "../../Components/AllPostsCards";
import { StyledUl, StyledDiv } from "./style";
import { Footer } from "../../Components/Footer";

export const AllPosts = () => {
  const { posts } = useContext(PostContext);

  return (
    <>
      <Header />
      <Container>
        <StyledDiv>
          <TitleTwo>Todas as notícias</TitleTwo>
          <StyledUl>
            {posts.map((post) => (
              <AllPostsCards key={post.id} post={post}/>
            ))}
          </StyledUl>
          </StyledDiv>
          <Footer/>
      </Container>
    </>
  );
};
