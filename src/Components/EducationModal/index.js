import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import * as Yup from 'yup'
import { Form, Formik } from 'formik';
import FromText from '../FormText'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const validationSchema = Yup.object({
    faculty: Yup.string().required(),
    degree: Yup.string().required(),
    yearOfGraduation: Yup.string().required(),
    university: Yup.string().required(),
    groupNumber: Yup.number().required(),
    desc: Yup.string().required(),
});


export default function EducationModal({ title, buttonTitle, handleSubmit, open, setOpen, data }) {


    const handleClose = () => {
        setOpen(false);
    };


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
                            faculty: data?.faculty || '',
                            university: data?.university || '',
                            desc: data?.description || '',
                            yearOfGraduation: data?.yearOfGraduation || '',
                            degree: data?.degree || '',
                            groupNumber: data?.groupNumber || ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}

                    >
                        {({ dirty, isSubmitting, isValid }) => (

                            <Form className='flex_col' autoComplete='off' style={{ width: 400 }}>
                                <FromText label="Faculty" name='faculty' />
                                <FromText label="University" name='university' />
                                <FromText label="Year Of Graduation" name='yearOfGraduation' />
                                <FromText label="Degree" name='degree' />
                                <FromText label="Group Number" name='groupNumber' />
                                <FromText label="Description" name='desc' />
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