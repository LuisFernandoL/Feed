import { styled } from "styled-components";

export const InternalContainer = styled.section`
  width: 100%;
  max-width: 92rem;
  margin: 0 auto;
  margin-bottom: 8.5rem;

  > header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
   
  }

  > div {
    margin-top: 4.5rem;
    
    .imgNews {
      width: 100%;
      max-width: 91.8rem;
      border-radius: 2.5rem;
      max-height: 45.5rem;
    }

    .imgLike {
      width: 1.8rem;
      height: 1.6rem;
      cursor: pointer;
    }

    span {
      display: flex;
      gap: 1rem;
      margin-top: 3.2rem;
      margin-bottom: 3.9rem;
    }

    aside {
      display: flex;
      align-items: center;
      gap: 2rem;
      line-height: 9.1rem;
    }

    article {
      p {
        font-family: 'Inter', sans-serif;
        line-height: 3.6rem;
      }
    }

  }
`

export const FooterListContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8rem; 

    margin-top: 3.5rem;
  }
 
`