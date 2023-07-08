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
  const { posts, postInternal, postLikes, postLikesDelete, setPostInternal } =
  useContext(PostContext);
  const likesCount = postInternal?.likes?.length || 0;
  const [isLike, setIsLike] = useState(false);
  let [countLike, setCountLike] = useState(likesCount);

  const likeOrUnlike = () => {
    const userId = JSON.parse(localStorage.getItem("@USERID")!);
    if (isLike) {
      postLikesDelete(postInternal.id);
      if (countLike > 0) {
        setCountLike((countLike) => {
          return countLike - 1;
        });
      }
      setIsLike(false);
      console.log("decrement");
    } else {
      console.log("increment");
      setCountLike((countLike) => countLike + 1);
      postLikes({
        postId: postInternal.id,
        userId,
      });
      setPostInternal({ ...postInternal });
      setIsLike(true);
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
              {countLike == 0
                ? "Seja o primeiro a curtir este post"
                : countLike > 1
                ? countLike + " curtidas"
                : countLike + " curtida"}
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
