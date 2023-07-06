import { styled } from "styled-components";

export const StyledMain = styled.main`
  section {
    width: 100%;
    text-align: center;

    img:nth-child(1) {
      margin-top: 4.7rem;
    }

    h1 {
      margin-top: 1.9rem;
    }

    p {
      font-family: 'Inter', sans-serif;
      margin-top: 3.8rem;
      margin-bottom: 5.8rem;
    }

    p + img {
      width: 100%;
      height: auto;
    }

    margin-bottom: 10rem;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8.5rem;
    margin-top: 4.8rem;
    margin-bottom: 10rem;
  }

  .flex-between {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

