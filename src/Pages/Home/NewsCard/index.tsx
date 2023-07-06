// import { Link } from "react-router-dom";
import { Container } from "./style";
import { TitleThree, TextTwo } from "../../../Styles/typography";
import { IPost } from "../../../Components/Provider/User/@types";
import { useContext } from "react";
import { PostContext } from "../../../Components/Provider/PostContext";

interface IPostCard {
  post: IPost;
}

export const NewsCard = ({ post }: IPostCard) => {
  const { internalPages } = useContext(PostContext);

  const handleClick = async(id:number)=>{
    await internalPages(id)
  }
  return (

    <Container>
      <li>
        <img src={post.image} alt={post.title} />
        <span>
          <TextTwo>{post.owner}</TextTwo>
        </span>
        {/* <TitleThree>{post.title}</TitleThree>
        <Link to={`/posts/${post.id}?_embed=likes`}>
          <TextTwo className="read-more">
            Leia mais
          </TextTwo> */}
        <button onClick={()=>handleClick(post.id)}>Leia mais</button>
        {/* </Link> */}
      </li>
    </Container>
  )
}
