import { styled } from "styled-components";

export const StyledSection = styled.section`
  .divOpenCreat {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    height: 10vh;
    align-items: center;

    button {
      width: 14.6rem;
      height: 4.3rem;
      background-color: var(--color-color-primary);
      align-items: center;
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      color: var(--color-grey-0);
      svg {
        margin-right: 1rem;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
  }
`;
