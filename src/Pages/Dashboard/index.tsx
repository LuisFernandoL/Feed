import { useContext } from "react";

import Logout from "../../assets/Vector.png"
import { UserContext } from "../../Components/Provider/User/UserContext";
export const Dashboard = () => {

  
  const { userLogout } = useContext(UserContext);

  return (
    <>
      <img onClick={() => userLogout()} src={Logout} alt="" />
      <h1>Dashboard</h1>
    </>
  );
};
