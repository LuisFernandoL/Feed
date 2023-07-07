import { styled } from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  margin-bottom: 4.7rem;

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
     display: flex;
     align-items: center;
     gap: 4rem;
    }

    span {
      svg {
        fill: var(--color-color-primary);
        margin-left:1rem;
      }
    }

    img {
      width: 15.3rem;
      height: 13.8rem;
      border-radius: 2.5rem;
    }
  }
`;
