import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./Routes/RoutesMain"
import "react-toastify/dist/ReactToastify.min.css"

export const App = () => {
  

  return (
    <>
      <RoutesMain /> 
      <ToastContainer />
    </>
  )
}


