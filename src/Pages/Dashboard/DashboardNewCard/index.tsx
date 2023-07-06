import { useContext } from "react";
import { IPost } from "../../../Components/Provider/User/@types";
import { PostContext } from "../../../Components/Provider/PostContext";
import { Container } from "../../../Styles/global";
import { TitleThree } from "../../../Styles/typography";
import { TfiTrash } from "react-icons/tfi";
import { MdOutlineEdit } from "react-icons/md";
import { StyledDiv } from "./style";
interface DashboardNewCardProps {
  post: IPost;
}

export const DashboardNewCard = ({ post }: DashboardNewCardProps) => {
  const { deletePost, editiPage } = useContext(PostContext);

  return (
    <Container>
      <StyledDiv>
        <ul>
      <li key={post.id}>
        <div>
          <img src={post.image} alt={post.title} />
          <TitleThree>{post.title}</TitleThree>
        </div>
        <span>
          <MdOutlineEdit onClick={() => editiPage(post)}>editar</MdOutlineEdit>
          <TfiTrash onClick={() => deletePost(post.id)}>Exluir</TfiTrash>
        </span>
      </li>
      </ul>
      </StyledDiv>
    </Container>
  );
};
