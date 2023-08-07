import { FC, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import FileUpload from './pages/file_upload'
import Layout from './components/Layout'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ForgotPasswordPage from './pages/forgot_password'
import ProtectedRoutes from './utlis/ProtectedRoutes'
import MyContext from './utlis/context/Mycontext'


const AppRoutes: FC = () => {
    const navigate = useNavigate()
    const [appState, setAppState] = useState<object>({
        isLoggedIn: false
    })

    const LoginHandler = (isUserLoggedIn: boolean | ((prevState: boolean) => boolean)) => {
        console.log(isUserLoggedIn);
        if (isUserLoggedIn) navigate("/", { replace: true })
        setAppState(prevState => ({
            ...prevState,
            isLoggedIn: isUserLoggedIn
        }))
    }
    const setContext = (obj: object) => {
        console.log("obj", obj);
        setAppState(prevState => ({
            ...prevState,
            ...obj
        }))

    }

    return (
        <MyContext.Provider value={{
            state: appState,
            setContext: setContext
        }}>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoutes>
                        <Layout>
                            <Home />
                        </Layout>
                    </ProtectedRoutes>
                } />
                <Route path='/login' element={<LoginPage handleLogin={LoginHandler} />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/forgot_password' element={<ForgotPasswordPage />} />
                <Route path='/profile' element={<Layout> <Profile /></Layout>} />
                <Route path='/file_upload' element={<Layout><FileUpload /> </Layout>} />
            </Routes>
        </MyContext.Provider >



    )
}
export default AppRoutes