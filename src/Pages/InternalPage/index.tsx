import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../Provider/PostContext";
import { NewsCard } from "../Home/NewsCard";
import { Header } from "../../Components/Header";
import { TextTwo, TitleOne, TitleTwo } from "../../Styles/typography";
import { FooterListContainer, InternalContainer } from "./style";
import { Container } from "../../Styles/global";
import { Footer } from "../../Components/Footer";
import iconLikePic from "../../assets/iconlike.svg";
import iconLikeFilledPic from "../../assets/iconlikefilled.png";

export const InternalPage = () => {
  const userId = JSON.parse(localStorage.getItem("@USERID")!);
  const { posts, postInternal, postLikes, postLikesDelete, setPostInternal } =
    useContext(PostContext);
  const [isLike, setIsLike] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const [likeIcon, setLikeIcon] = useState(iconLikePic);

  useEffect(() => {
    // implementar um loading para aguardar o GET de likes
    const likesCount = postInternal?.likes?.length || 0;
    setCountLike(likesCount);
    setIsLike(checkLike());
  }, [postInternal]);

  useEffect(() => {
    setLikeIcon(isLike ? iconLikeFilledPic : iconLikePic)
  }, [isLike]);

  const checkLike = () => {
    return postInternal?.likes?.some((like) => like.userId === userId);
  };

  const likeOrUnlike = () => {
    if (isLike) {
      postLikesDelete(postInternal.id);
      if (countLike > 0) {
        setCountLike((currentValue) => currentValue - 1);
      }
      setIsLike(false);
    } else {
      setCountLike((currentValue) => currentValue + 1);
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
            <img className="imgLike" src={likeIcon} onClick={likeOrUnlike} />
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
