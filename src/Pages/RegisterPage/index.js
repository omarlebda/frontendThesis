import { useEffect } from 'react'
import RegisterForm from '../../Components/RegistrationForm'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

export default function RegisterPage({ history }) {
    const { isAuthenticated } = useSelector(state => state.auth);
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
    }, [isAuthenticated])
    return (
        <div className='login_screen'>
            <RegisterForm />
            <h1>You don't have account?
                <Link to='/login'>Login</Link>
            </h1>
        </div>
    )
}