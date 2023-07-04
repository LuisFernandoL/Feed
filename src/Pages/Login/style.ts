import styled from "styled-components";

export const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .divInterna {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;

    .div__img {
      min-width: clamp(150px, 100%, 580px);
      img {
        width: 100%;
        height: 100%;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      width: 50%;
      height: 350px;
      padding: 0 1.6rem;

      .btn__enter {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: clamp(150px, 92%, 370px);
        height: 50px;
        color: var(--color-grey-0);
        background-color: var(--color-color-primary);
        border-radius: 0.25rem;
        margin: 1.6rem;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h1 {
        font-weight: 700;
        font-size: 2.75rem;
      }
    }
  }
`;
