import { StyledHeader } from "./style";
import { Button } from "../../Styles/buttons";
import logo from "../../assets/logo.svg";
import { Container } from "../../Styles/global";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Provider/User/UserContext";

export const Header = () => {
  const { access, userLogged  } = useContext(UserContext);
  const token = localStorage.getItem("@TOKEN")
  console.log(userLogged)
  return (
    <StyledHeader>
      <Container>
        <Link to="/home">
          <img src={logo} />
        </Link>
       
        {/* {!token && <Link to="/"> */}

         <Button onClick={access} variant="primary" width="112px">

            Acessar
        </Button>
        {/* </Link>} */}
      </Container>
    </StyledHeader>
  );
};
