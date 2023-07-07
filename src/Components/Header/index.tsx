import { StyledHeader } from "./style";
import { Button } from "../../Styles/buttons";
import logo from "../../assets/logo.svg";
import { Container } from "../../Styles/global";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Provider/User/UserContext";
import { FiLogOut } from "react-icons/fi";
interface HeaderProps {
  pathname?: string | undefined;
}

export const Header = ({ pathname }: HeaderProps) => {
  const { access, userLogged, userLogout } = useContext(UserContext);
  const isDash: boolean = pathname === "/dashboard";
  // const token = localStorage.getItem("@TOKEN")
  console.log(userLogged);
  return (
    <StyledHeader>
      <Container>
        <Link to="/home">
          <img src={logo} />
        </Link>

        {/* {!token && <Link to="/"> */}

        <span>
          <Button
            onClick={access}
            variant={isDash ? "secondary" : "primary"}
            width="112px"
          >
            {!isDash ? "Acessar" : "Dashboard"}
            
          </Button>
          {isDash && <FiLogOut onClick={() => userLogout()} size={24} />}
        </span>
        {/* </Link>} */}
      </Container>
    </StyledHeader>
  );
};
