import { useContext } from "react";
import { PostContext } from "../../Provider/PostContext";
import { ModalNewPost } from "./ModalNewPost";
import { DashboardNewCard } from "./DashboardNewCard";
import { Footer } from "../../Components/Footer";
import { DashboardContainer, StyledSection } from "./StyleSection";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Header } from "../../Components/Header";
import { useLocation } from "react-router-dom";
import { TitleTwo } from "../../Styles/typography";
import { Button } from "../../Styles/buttons";

export const Dashboard = () => {
  const { posts, creatOpen, setCreatOpen } = useContext(PostContext);
  const { pathname } = useLocation();

  return (
    <>
      <Header pathname={pathname} />
      <DashboardContainer>
          <StyledSection>
            <div className="divOpenCreate">
              <TitleTwo>Suas publicações</TitleTwo>
              <Button variant="primary" width="146px" onClick={() => setCreatOpen(true)}>
                <AiOutlinePlusCircle size={18} fill="#FFFFFF" /> Novo post
              </Button>
              {creatOpen ? <ModalNewPost /> : null}
            </div>
            <ul>
              {posts.map((post) => (
                <DashboardNewCard key={post.id}post={post} />
              ))}
            </ul>
          </StyledSection>
      </DashboardContainer>
      <Footer variant="fixed"/>
    </>
  );
};
