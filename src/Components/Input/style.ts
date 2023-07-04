import styled from "styled-components";

export const InputStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.6rem;
  min-width: clamp(150px, 100%, 370px);
  width: 100vw;

  input {
    display: flex;
    min-width: clamp(150px, 100%, 370px);
    height: 50px;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.50);
    padding: 0 10px;
    margin-bottom: 12px;
  }
`;
