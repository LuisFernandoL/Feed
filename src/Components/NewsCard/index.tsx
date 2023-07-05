import { Link } from "react-router-dom"
import { Container } from "./style"
import { TitleThree, TextTwo } from "../../Styles/typography"
import { IPost } from "../Provider/User/@types"

interface IPostCard{
  post: IPost;
}

export const NewsCard = ({post}:IPostCard) => {
  

  return (
    <Container>
      <li>
        <img src={post.image} alt={post.title} />
        <span>
          <TextTwo>{post.owner}</TextTwo>
        </span>
        <TitleThree>{post.title}</TitleThree>
        <Link to={`/posts/${post.id}?_embed=likes`}>
         <TextTwo>
          <p>Leia mais</p> 
          </TextTwo>
        </Link>
      </li>
    </Container>
  )
}
