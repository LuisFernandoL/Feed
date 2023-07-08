import { styled } from "styled-components";

export const StyleModalCreate = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    font-family: "Inter", sans-serif;
    border: solid 0.15rem rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 4.8rem;
    padding: 0 2rem;
    color: var(--color-grey-2);
    border-radius: 0.4rem;
  }
  
  textarea {
    font-family: "Inter", sans-serif;
    border: solid 0.15rem rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 25rem;
    padding: 2rem;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      font-family: "Inter", sans-serif; 
      width:16.6rem;
      height: 6.4rem;
      background-color: var(--color-color-primary);
      border-radius: 0.5rem;
      font-size: 1.6rem;
      color: var(--color-grey-0);
      font-weight: 700;
    }
  }
`;
