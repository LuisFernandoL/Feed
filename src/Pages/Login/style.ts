import styled from "styled-components";

export const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  gap: 2rem;
  height: calc(100vh - 20rem);

  .divInterna {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 12.6rem;

    .div__img {
      width:clamp(150px, 100%, 580px);
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
      height: 350px;
      padding: 0 1.6rem;
      max-width: 48rem;
      /* width: clamp(300px, 50vw, 1000px); */

      div:nth-child(1) {
        text-align: center;
        
        h2 {
          margin-bottom: 3.5rem;
        }

        p {
          margin-bottom: 3.5rem;
        }
      }

      div:nth-child(2) {
        width: 100%;
        max-width: 38rem;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .cad__link {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 4rem;
        margin-top: 3.5rem;
      }

      .link {
        color: var(--color-color-primary);
      }
      
      .link:hover {
        text-decoration: underline;
      }
    }
  }
`;
