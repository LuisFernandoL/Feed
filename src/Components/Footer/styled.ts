import { css, styled } from "styled-components";

type ContainerProps = {
  variant?: string;
};

export const Container = styled.div<ContainerProps>`
  ${({ variant }: ContainerProps) => {
    if (variant === "fixed") {
      return css`
        position: fixed;
        bottom: 0;
        left: 0;
      `;
    } else if(variant  === "static") {
      return css`
        position: static
      `
    }
  }};

  width: 100%;
  background-color: white;

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 12rem;
  }

`;
