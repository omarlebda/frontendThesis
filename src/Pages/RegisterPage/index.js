import { useEffect } from 'react'
import RegisterForm from '../../Components/RegistrationForm'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

export default function RegisterPage({ history }) {
    const { isAuthenticated, loading } = useSelector(state => state.auth);

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         history.push('/login')
    //     }
    // }, [isAuthenticated, history])
    return (
        <div className='login_screen'>
            <RegisterForm history={history} />
            <h1>You have account?
                <Link to='/login'>Login</Link>
            </h1>
        </div>
    )
}