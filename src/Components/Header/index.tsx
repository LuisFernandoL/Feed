import { StyledHeader } from "./style";
import { Button } from "../../Styles/buttons";
import logo from "../../assets/logo.svg";
import { Container } from "../../Styles/global";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to="/home">
          <img src={logo} />
        </Link>
        <Link to="/">
          <Button variant="primary" width="112px">
            Acessar
          </Button>
        </Link>
      </Container>
    </StyledHeader>
  );
};
