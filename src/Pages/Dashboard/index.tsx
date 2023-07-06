import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";
import { ModalNewPost } from "./ModalNewPost";
import { StyledContainer } from "../../Styles/grid";
import { DashboardNewCard } from "../../Components/DashboardNewCard";
import { Footer } from "../../Components/Footer";
import { StyledSection } from "./StyleSection";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Dashboard = () => {
  const { posts, creatOpen, setCreatOpen } = useContext(PostContext);

  return (
    <>
      <StyledContainer>
        <StyledSection>
          <div className="divOpenCreat">
            <h1>Suas publicações</h1>
            <button onClick={() => setCreatOpen(true)}>
              <AiOutlinePlusCircle size={18} fill="#FFFFFF" /> Novo post
            </button>
            {creatOpen ? <ModalNewPost /> : null}
          </div>
          <ul>
            {posts.map((post) => (
              <DashboardNewCard post={post} />
            ))}
          </ul>
        </StyledSection>
      </StyledContainer>
      <Footer />
    </>
  );
};
