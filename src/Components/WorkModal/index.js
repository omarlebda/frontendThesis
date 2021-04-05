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
    position: Yup.string().required().min(4),
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date().required("End date is required"),
});


export default function WorkModal({ title, buttonTitle, handleSubmit, open, setOpen, data, company, work, curr_company }) {


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
                            position: work?.position || '',
                            startDate: work?.startDate || '',
                            endDate: work?.endDate || '',
                            company: work?.company.id || [],

                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}

                    >
                        {({ dirty, isSubmitting, isValid, values }) => (

                            <Form className='flex_col' autoComplete='off' style={{ width: 400 }}>
                                <FromText label="Position" name='position' />
                                <FromText label="Start Date" name='startDate' placeholder="mm/dd/yyyy" />
                                <FromText label="End Date" name='endDate' placeholder="mm/dd/yyyy" />
                                <FormikSelect label='Company' name='company' options={company} curr_company={curr_company} />
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