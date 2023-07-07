import { styled } from "styled-components";

export const Container = styled.div`

  li {
    flex-direction: column;
    max-width: 54.7rem;
    min-width: clamp(150px, 100%, 580px);
    align-items: flex-start;

    img {
      width: 100%;
      height: auto;
      border-radius: 25px;
    }

    span {
      margin-top: 2.5rem;
    }

    strong {
      margin-top: 1.4rem;
      margin-bottom: 5.6rem;
    }

    strong + p {
      color: var(--color-color-primary);
    }
  }

  .read-more {
      color: var(--color-color-primary);
      padding-top: 2rem;
  }
`;
