import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 939.2px;

  li {
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
