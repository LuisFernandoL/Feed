import { styled } from "styled-components";

export const Container = styled.div`

  li {
    flex-direction: column;
    max-width: 54.7rem;

    img {
      width: 100%;
      height: auto;
    }

    span {
      display: block;
      margin-top: 2.5rem;
    }

    strong {
      margin-top: 1.4rem;
      margin-bottom: 5.6rem;
      
    }

    p {
      color: var(--color-color-primary);
    }
  }
`;
