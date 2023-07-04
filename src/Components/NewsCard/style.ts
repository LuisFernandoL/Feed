import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 58.7rem;

  li {
    img {
      width: 100%;
      max-width: 58.7rem;
      height: auto;
    }

    span {
      display: block;
      margin-top: 2.5rem;
    }
    strong {
      margin-top: 1.4rem;
      display: block;
      margin-bottom: 5.6rem;
    }

    strong + p {
      color: var(--color-color-primary)
    }
  }
`