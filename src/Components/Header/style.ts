import { styled } from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 8rem;
  width: 100%;
  background-color: white;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    max-width: 120rem;

    span {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .avatar {
      background-color: var(--color-color-primary);
      color: white;
      height: 4.5rem;
      width: 4.5rem;
      margin-right: auto.5rem;
      border-radius: 2.25rem;
      
      font-size: 16px;
      font-weight: bold;
      font-family: "Inter", sans-serif;
      line-height: 4.5rem;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`