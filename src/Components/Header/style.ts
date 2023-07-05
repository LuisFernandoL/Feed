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
    max-width: 122rem;
  }
`