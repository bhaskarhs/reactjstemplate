import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import FileUpload from './pages/file_upload'
import Layout from './components/Layout'


const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={
                <Layout>
                    <Home />
                </Layout>

            } />
            <Route path='/profile' element={<Layout> <Profile /></Layout>} />
            <Route path='/file_upload' element={<Layout><FileUpload /> </Layout>} />
        </Routes>
    )
}
export default AppRoutes