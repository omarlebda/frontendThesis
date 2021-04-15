
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../CustomButton'
import FromText from '../FormText';

import { Card } from '@material-ui/core';

import { userRegistration } from '../../Redux/Auth/AuthActions'
import { useDispatch, useSelector } from 'react-redux'

import { withRouter } from 'react-router';

import { Redirect } from 'react-router-dom'

const validationSchema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(4),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default withRouter(function RegisterForm({ history }) {


    const dispatch = useDispatch()
    const { error } = useSelector(state => state.auth)

    const handleSubmit = (values) => {
        const { username, email, password } = values
        dispatch(userRegistration({
            username,
            email,
            password1: password,
            password2: password
        })).then(res => {
            history.push('/login')
        }).catch(err => console.log(err))

    }


    return (

        <Card className="card_register">
            <h1>Register</h1>
            <div className='login_form_container'>

                <Formik
                    initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}

                >
                    {({ dirty, isSubmitting, isValid }) => (

                        <Form>
                            <FromText label="username" name='username' />
                            <FromText label="email" name='email' />
                            <FromText type='password' label="password" name='password' />
                            <FromText type='password' label="confirm password" name='confirmPassword' />
                            {error && <label className='label'>{error}</label>}
                            <div className='btn' style={{ margin: '0' }}>
                                <CustomButton
                                    disabled={!dirty || !isValid || isSubmitting}
                                    inverted
                                    type='submit'
                                    title='Register'

                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
})