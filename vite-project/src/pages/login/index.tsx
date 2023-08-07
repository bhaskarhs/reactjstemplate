
import Login from '../../components/login';

export interface LoginProps {
    handleLogin: (value: boolean) => void
}

const LoginPage = ({ handleLogin }: LoginProps) => {
    return (
        <div className='grid h-screen place-items-center'>
            <Login handleLogin={handleLogin} />
        </div>

    )
}

export default LoginPage