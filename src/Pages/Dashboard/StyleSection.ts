import { styled } from "styled-components";

export const StyledSection = styled.section`
  .divOpenCreate {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    width: 100%;
    max-width: 122rem;
    padding: 0 2rem;
    justify-content: space-between;
    height: 10vh;
    align-items: center;
    
    margin: 0 auto;
  }

  h2 {
    margin-top: 2rem;
  }
 
  ul {
    margin-top: 2.4rem; 
    display: flex;
    flex-direction: column;
  }
`;

export const DashboardContainer = styled.main`
  width: 100vw;
  min-height: calc(100vh - 20rem);
  background-color: #F3F3F3;
`