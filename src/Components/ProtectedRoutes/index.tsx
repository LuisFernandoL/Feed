import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../../Provider/User/UserContext"

export const ProtectedRoutes = () => {
    const { userLogged } = useContext(UserContext)
    return userLogged ? <Outlet/> : <Navigate to="/"/>
    
}