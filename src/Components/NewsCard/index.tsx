import { Link } from "react-router-dom"
import { Container } from "./style"
import { TitleThree, TextTwo } from "../../Styles/typography"
import { IPosts } from "../Provider/User/@types"

export const NewsCard = (post: IPosts) => {
  return (
    <Container>
      <li>
        <img src={post.image} alt={post.title} />
        <span><TextTwo>{post.owner}</TextTwo></span>
        <TitleThree>{post.title}</TitleThree>
        <Link to='/'>
         <TextTwo>Leia mais</TextTwo>
        </Link>
      </li>
    </Container>
  )
}

