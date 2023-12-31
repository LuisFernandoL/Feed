import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyleEdditPostMain = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-1);
  height: calc(100vh - 16rem);

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: clamp(150px, 100%, 800px);
    padding: 2rem 0;
    svg {
      margin-right: 1rem;
    }
  }

  .divMainEddit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      min-width: clamp(150px, 100%, 800px);
      gap: 2rem;
    }
    .divButtonEddit {
      display: flex;
      width: 100%;
      
      button {
        width: 16.6rem;
        height: 6.4rem;
        background-color: var(--color-color-primary);
        border-radius: 0.5rem;
        color: var(--color-grey-0);
        font-size: 1.7rem;
        font-weight: 700;
      }
    }
  }
`;

export const StyleLink = styled(Link)`
  width: 10.7rem;
  height: 4.3rem;
  background-color: var(--color-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-0);
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;

  svg {
    margin-right: 1rem;
  }
`;
