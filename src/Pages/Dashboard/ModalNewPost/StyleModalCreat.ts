import styled from "styled-components";

export const ModalContainerCreate = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(85, 163, 255, 0.3);
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
    min-width: clamp(150px, 100%, 800px);
    border-radius: 0.5rem;
    padding: 2rem;

    header {
      position: relative;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      padding: 2rem 0;
      background-color: #ffffff;
      font-size: 3.2rem;
      border-radius: 0.5rem 0.5rem 0 0;
      color: #000000;
      font-weight: 700;

      h1 {
        font-weight: 700;
      }

      button {
        position: absolute;
        padding: 1.5rem;
        right: 0;
        top: 0;
      }
    }
  }
`;
