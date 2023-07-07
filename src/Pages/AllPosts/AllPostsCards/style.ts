import { styled } from "styled-components";

export const StyledAllPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:clamp (5rem, 100%, 1000px);
    
    li {
      display: flex;
      flex-direction: column;
      max-width: 56rem;
      gap: 1.5rem;
      
      
      img {
        width:clamp (5.3rem, 100%, 58.7rem);
        border-radius: 25px;
      }

      button {
        color: var(--color-color-primary);
      }
    }
`