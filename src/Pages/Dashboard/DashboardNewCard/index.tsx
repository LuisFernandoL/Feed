import { useContext } from "react";
import { IPost } from "../Provider/User/@types";
import { PostContext } from "../Provider/PostContext";
import { Container } from "../../Styles/global";
import { TitleThree } from "../../Styles/typography";
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
        <li key={post.id}>
          <div>
            <img src={post.image} alt={post.title} />
            <TitleThree>{post.title}</TitleThree>
          </div>
          <span>
            <button onClick={() => editiPage(post)}>
              <MdOutlineEdit size={24}/>
            </button>
            <button onClick={() => deletePost(post.id)}>
              <TfiTrash size={22}/>
            </button>
          </span>
        </li>
      </StyledDiv>
    </Container>
  );
};
