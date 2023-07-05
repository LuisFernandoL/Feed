import styled from "styled-components";

export const ModalConteinerCreat = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    height: 20vh;
    align-items: center;
    justify-content: flex-start;
    background-color: #212529;
    min-width: clamp(150px, 100%, 370px);
    height: 34rem;
    border-radius: 0.5rem;
    header {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      padding: 2rem;
      background-color: #343b41;
      font-size: 1.4rem;
      border-radius: 0.5rem 0.5rem 0 0;
      color: #f8f9fa;
      font-weight: 700;

      button {
        color: #f8f9fa;
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
  }
`;