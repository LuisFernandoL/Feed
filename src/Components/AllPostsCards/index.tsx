import { Link } from "react-router-dom"
import { TitleThree, TextTwo } from "../../Styles/typography"
import { IPost } from "../Provider/User/@types"

interface IPostCards{
  post: IPost;
}

export const AllPostsCards = ({post}:IPostCards) => {
  

  return (
    <div>
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
    </div>
  )
}
