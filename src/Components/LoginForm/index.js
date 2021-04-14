// hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// redux
import { userLogin } from '../../Redux/Auth/AuthActions'
// form validation
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import CustomButton from '../CustomButton'
import FromText from '../FormText';
// render
import { Card } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import './styleLoginForm.css'



const validationSchema = Yup.object({
    username: Yup.string().required().min(4),
    password: Yup.string().required().min(4)
});

export default function LoginForm() {

    const dispatch = useDispatch()
    const { error } = useSelector(state => state.auth)


    const handleSubmit = (values) => {
        dispatch(userLogin({
            username: values.username,
            password: values.password
        }))

    }


    return (
        <Card className="card_login_form" style={{ width: '70%' }}>
            <h1>login </h1>
            <div className='login_form_container'>

                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ dirty, isSubmitting, isValid }) => (

                        <Form className='flex_col'>
                            <FromText label="username" name='username' />
                            <FromText type='password' label="password" name='password' />
                            {error && <Alert severity="error">Invalid username/password!</Alert>}
                            <div className='btn'>
                                <CustomButton
                                    disabled={!dirty || !isValid || isSubmitting}
                                    inverted
                                    type='submit'
                                    title='Login'
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}