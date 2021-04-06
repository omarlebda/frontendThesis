import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import * as Yup from 'yup'
import { Form, Formik, Field } from 'formik';
import FromText from '../FormText'
import FormikSelect from '../FormikSelect'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const validationSchema = Yup.object({
    name: Yup.string().required(),
    address: Yup.string().required(),
    email: Yup.string().required(),
    information: Yup.string().required(),
});


export default function CompanyModal({ title, buttonTitle, handleSubmit, open, setOpen, data }) {


    const [selectedValue, setSelectedValue] = useState('')

    const handleClose = () => {
        setOpen(false);
    };
    // console.log(company, 'com')

    return (
        <div>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            name: '',
                            address: '',
                            email: '',
                            information: '',

                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}

                    >
                        {({ dirty, isSubmitting, isValid, values }) => (

                            <Form className='flex_col' autoComplete='off' style={{ width: 400 }}>
                                <FromText label="Name" name='name' />
                                <FromText label="Address" name='address' />
                                <FromText label="E-mail" name='email' />
                                <FromText label="Information" name='information' />
                                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button type='submit' color="primary" disabled={!dirty || !isValid || isSubmitting}>
                                        {buttonTitle}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </div>
    );
}