import { styled } from "styled-components";

export const StyleEdditPostMain = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-1);
  height: calc(100vh - 16rem);

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: clamp(150px, 100%, 800px);
    padding: 2rem 0;

    button {
      width: 10.7rem;
      height: 4.3rem;
      background-color: var(--color-color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-grey-0);
      border-radius: 0.5rem;
      font-family: 'inter', sans-serif;
      font-size: 1.4rem;
      font-weight: 700;

      svg {
        margin-right: 1rem;
      }
    }
  }

  .divMainEddit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      min-width: clamp(150px, 100%, 800px);
      gap: 2rem;

      input {
        background-color: var(--color-grey-0);
        height: 5rem;
        font-size: 2.1rem;
        padding: 0 2rem;
        border-radius: 0.5rem;
        font-family: 'inter', sans-serif;
      }

      label {
        font-weight: 700;
      }


      textarea {
        background-color: var(--color-grey-0);
        height: 30rem;
        padding: 2rem;
        font-size: 2.1rem;
        border-radius: 0.5rem;
        font-family: 'inter', sans-serif;
      }

      .divButtonEddit {
        display: flex;
        width: 100%;
        
        button {
          width: 16.6rem;
          height: 6.4rem;
          background-color: var(--color-color-primary);
          border-radius: 0.5rem;
          color: var(--color-grey-0);
          font-size: 1.7rem;
          font-weight: 700;
          font-family: 'inter', sans-serif;
        }
        
      }
    }
  }
`;
