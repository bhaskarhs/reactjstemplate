import { FC } from 'react'

const Login: FC = () => {
    return (
        <div className='w-[35%]'>
            <h3>Logo</h3>
            <form className='bg-white rounded-sm px-6 py-4 mt-2 shadow-md overflow-hidden sm:rounded-lg '>
                <div className='flex flex-col my-4'>
                    <label>
                        Email
                    </label>
                    <input type='email' required className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full p-2 focus:outline-none' />
                </div>
                <div className='flex flex-col my-4'>
                    <label>
                        Password
                    </label>
                    <input type='password' required className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full p-2 focus:outline-none' />
                </div>
                <div>
                    <input type='checkbox' className='rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500' />
                    <label className='ml-2 text-sm text-gray-600'>Remember me</label>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <a className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="http://buyersscoop.net/forgot-password">Forgot your password?
                    </a>
                    <button type="submit" className="inline-flex items-center px-4 py-2 bg-loginbuttooncolor border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-3">Log in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login