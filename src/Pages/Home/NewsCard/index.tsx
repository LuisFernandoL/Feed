import { Link } from "react-router-dom";
import { Container } from "./style";
import { TitleThree, TextTwo } from "../../../Styles/typography";
import { IPost } from "../../../Provider/User/@types";
import { useContext } from "react";
import { PostContext } from "../../../Provider/PostContext";

interface IPostCard {
  post: IPost;
}

export const NewsCard = ({ post }: IPostCard) => {
  const { internalPages } = useContext(PostContext);

  const handleClick = async (id: number) => {
    await internalPages(id);
  };
  return (
    <Container className="divLi">
      <li>
        <img src={post.image} alt={post.title} />
        <span>
          <TextTwo>{post.owner}</TextTwo>
        </span>
        <TitleThree>{post.title}</TitleThree>
        <Link to={`/posts/${post.id}?_embed=likes`}>
          <button onClick={() => handleClick(post.id)}>
            <TextTwo className="read-more">Leia mais</TextTwo>
          </button>
        </Link>
      </li>
    </Container>
  );
};
