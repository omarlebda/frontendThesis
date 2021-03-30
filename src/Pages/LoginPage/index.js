import React, { useEffect } from 'react'

import './StyleLoginScreen.css'
import { Link } from 'react-router-dom'
import LoginForm from '../../Components/LoginForm'
import { useSelector } from 'react-redux'

export default function LoginScreen({history}) {

    const { isAuthenticated } = useSelector(state => state.auth);

    useEffect(() => {
       if (isAuthenticated){
        history.push('/')
       }
    }, [isAuthenticated, history])

    return (
        <div className='login_screen'>
            <LoginForm />
            <h1>You don't have account? 
                <Link to='/register'>Register</Link>  
            </h1>
        </div>
    )
}