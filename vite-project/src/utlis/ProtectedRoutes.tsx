import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import MyContext from './context/Mycontext';


interface ProtectedRoutesProps {
    children: React.ReactNode,
}
const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
    const context = useContext<unknown>(MyContext)
    const location = useLocation();
    console.log(context, children);

    const isLoggedIn = context.state.isLoggedIn || localStorage.getItem("login");
    if (!isLoggedIn) return <Navigate to="/login" state={{ from: location }} replace />

    return children

}

export default ProtectedRoutes 