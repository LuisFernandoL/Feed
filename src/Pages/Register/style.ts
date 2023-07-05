import { styled } from "styled-components";
import { Button } from "../../Styles/buttons";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 79.8rem;
  padding: 0 2rem;
  margin: 12rem auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    > p {
      margin-top: 4rem;
      margin-bottom: 3.5rem;
    }

    input {
      border: 1px solid rgba(0,0,0, 0.5);
      padding: 1.8rem 2.4rem;
      margin: 0.5rem 0;
      width: 100%;
      max-width: 37rem;
    }
  }

`

export const FormGrid = styled.section`
  display: grid;
  gap: 2rem;
  width: 100%;
`

export const FormButton = styled(Button)`
  padding: 1.6rem 2.9rem;
  height: 5.4rem;
  margin-top: 2.2rem;
  align-self: flex-end;
`
export const BackButton = styled(Button)`
  margin-top: 8rem;
`