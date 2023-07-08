import { useContext } from "react";
import { PostContext } from "../../Provider/PostContext";
import { NewsCard } from "../Home/NewsCard";
import { Header } from "../../Components/Header";
import { TextTwo, TitleOne, TitleTwo } from "../../Styles/typography";
import { FooterListContainer, InternalContainer } from "./style";
import { Container } from "../../Styles/global";
import { Footer } from "../../Components/Footer";
import iconlike from "../../assets/iconlike.svg"

export const InternalPage = () => {
  const { posts, postInternal } =
    useContext(PostContext);



  return (
    <>
      <Header />
      <InternalContainer>
        <header>
          <span>
            <TextTwo>Por: {postInternal.owner}</TextTwo>
          </span>
          <TitleOne>{postInternal.title}</TitleOne>
        </header>

        <div>
          <img className="imgNews" src={postInternal.image} alt={postInternal.title} />
          <img className="imgLike" src={iconlike} onClick={() => postLikes(postInternal.id)}/>
          <span >
            Seja primeiro a curtir este post
          </span>
          <article>
            <p>{postInternal.description}</p>
          </article>
        </div>
      </InternalContainer>
      <Container>
        <FooterListContainer>
          <TitleTwo>Leia também</TitleTwo>
          <ul>
            {posts.slice(0, 2).map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </ul>
        </FooterListContainer>
      </Container>
      <Footer />
    </>
  );
};
