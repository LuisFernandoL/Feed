import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./Routes/RoutesMain"
import "react-toastify/dist/ReactToastify.min.css"
import GlobalStyle from "./Styles/global"

export const App = () => {
  

  return (
    <>
      <GlobalStyle/>
      <RoutesMain /> 
      <ToastContainer />
    </>
  )
}


