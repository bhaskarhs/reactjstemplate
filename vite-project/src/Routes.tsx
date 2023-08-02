import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import FileUpload from './pages/file_upload'
import Layout from './components/Layout'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ForgotPasswordPage from './pages/forgot_password'


const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={
                <Layout>
                    <Home />
                </Layout>

            } />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/forgot_password' element={<ForgotPasswordPage />} />
            <Route path='/profile' element={<Layout> <Profile /></Layout>} />
            <Route path='/file_upload' element={<Layout><FileUpload /> </Layout>} />
        </Routes>
    )
}
export default AppRoutes