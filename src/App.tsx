import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./Routes/RoutesMain";
import "react-toastify/dist/ReactToastify.min.css";
import GlobalStyle from "./Styles/global";
import Reset from "./Styles/reset";

export const App = () => {
  return (
    <>
			<GlobalStyle />
			<Reset />
      <RoutesMain /> 
      <ToastContainer />
    </>
  );
};
