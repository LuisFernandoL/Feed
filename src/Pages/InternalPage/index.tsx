import { useContext } from "react";
import { PostContext } from "../../Provider/PostContext";

import { NewsCard } from "../Home/NewsCard";
import { Header } from "../../Components/Header";
import { TextTwo, TitleOne, TitleTwo } from "../../Styles/typography";
import { FooterListContainer, InternalContainer } from "./style";
import { Container } from "../../Styles/global";
import { Footer } from "../../Components/Footer";

export const InternalPage = () => {
  const { posts, postInternal, postLikes, postLikesDelete } =
    useContext(PostContext);

  console.log(postInternal);
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
          <img src={postInternal.image} alt={postInternal.title} />
          <span>Seja primeiro a curtir este post</span>
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
      <Footer/>
    </>
  );
};
