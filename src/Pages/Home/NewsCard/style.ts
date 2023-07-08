import { styled } from "styled-components";

export const Container = styled.div`


  li {
    flex-direction: column;
    width: 54.6rem;
    max-width: clamp(15rem, 100%, 58rem);

    

    img {
      border-radius: 2.5rem;
      max-height: 25.4rem;
      max-width: clamp(150px, 100%, 580px);
    }

    span {
      margin-top: 2.5rem;
    }

    strong {
      margin-top: 1.4rem;
      margin-bottom: 3.6rem;
    }

    strong + p {
      color: var(--color-color-primary);
    }
    padding-bottom: 2rem;
  }

  .read-more {

      color: var(--color-color-primary);
 
  }
`;
