import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";
import { ModalNewPost } from "./ModalNewPost";
import { StyledContainer } from "../../Styles/grid";
import { DashboardNewCard } from "./DashboardNewCard";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StyledSection } from "./style";

export const Dashboard = () => {
  const { posts, creatOpen, setCreatOpen } = useContext(PostContext);

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledSection>
          <div>
            <h1>Suas publicações</h1>
            <button onClick={() => setCreatOpen(true)}>Novo post</button>
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
