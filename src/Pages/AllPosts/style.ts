import { styled } from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;
  margin-top: 4rem;
`

export const StyledDiv = styled.div`
  height: calc(100vh - 16rem);

  h2 {
    margin-top: 4rem;
  }
`