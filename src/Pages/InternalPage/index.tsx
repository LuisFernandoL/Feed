import { useContext, useState } from "react";
import { PostContext } from "../../Provider/PostContext";
import { NewsCard } from "../Home/NewsCard";
import { Header } from "../../Components/Header";
import { TextTwo, TitleOne, TitleTwo } from "../../Styles/typography";
import { FooterListContainer, InternalContainer } from "./style";
import { Container } from "../../Styles/global";
import { Footer } from "../../Components/Footer";
import iconlike from "../../assets/iconlike.svg";

export const InternalPage = () => {
  const { posts, postInternal, postLikes, postLikesDelete, likes } =
    useContext(PostContext);
  const [isLike, setIsLike] = useState(false);
  const likesCount = postInternal?.likes?.length || 0;
  const userId = JSON.parse(localStorage.getItem("@USERID")!);
  console.log(likes)
  const likeOrUnlike = () => {
    if (isLike) {
      () => postLikesDelete(postInternal.id);
      setIsLike(false)
    } else {
      postLikes({
        postId: postInternal.id,
        userId,
      });
      setIsLike(true)
    }
  };

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
          <img
            className="imgNews"
            src={postInternal.image}
            alt={postInternal.title}
          />
          <aside>
            <img className="imgLike" src={iconlike} onClick={likeOrUnlike} />
            <span>
              {likesCount == 0
                ? "Seja o primeiro a curtir este post"
                : likesCount > 1
                ? likesCount + " curtidas"
                : likesCount + " curtida"}
            </span>
          </aside>
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
