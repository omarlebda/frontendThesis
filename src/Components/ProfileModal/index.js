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
    email: Yup.string().required(),
    phone_number: Yup.string().required(),
    bio: Yup.string().required(),
    current_city: Yup.string().required(),
    current_job: Yup.string().required(),
    facebook_link: Yup.string().required(),
    twitter_link: Yup.string().required(),
    instagram_link: Yup.string().required(),
    skype_link: Yup.string().required(),
    linkedin_link: Yup.string().required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    birthdate: Yup.date().required("Start date is required"),
});


export default function WorkModal({ title, buttonTitle, handleSubmit, open, setOpen, data, user }) {



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
                            email: user.email || '',
                            phone_number: user.phone_number || '',
                            bio: user.bio || '',
                            birthdate: user.birthdate || '',
                            current_city: user.current_city || '',
                            current_job: user.current_job || '',
                            facebook_link: user.facebook_link || '',
                            twitter_link: user.twitter_link || '',
                            instagram_link: user.instagram_link || '',
                            skype_link: user.skype_link || '',
                            linkedin_link: user.linkedin_link || '',
                            first_name: user.first_name || '',
                            last_name: user.last_name || ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}

                    >
                        {({ dirty, isSubmitting, isValid,  }) => (

                            <Form className='flex_col' autoComplete='off' style={{ width: 400 }}>
                                <FromText label="First Name" name='first_name' />
                                <FromText label="Last Name" name='last_name' />
                                <FromText label="Birthdate" name='birthdate' placeholder="yyyy/mm/dd" />
                                <FromText label="E-mail" name='email' />
                                <FromText label="Phone Number" name='phone_number' />
                                <FromText label="Bio" name='bio' />
                                <FromText label="Current City" name='current_city' />
                                <FromText label="Current Job" name='current_job' />
                                <FromText label="Facebook Link" name='facebook_link' />
                                <FromText label="Twitter Link" name='twitter_link' />
                                <FromText label="Instagram Link" name='instagram_link' />
                                <FromText label="Skype Link" name='skype_link' />
                                <FromText label="LinkedIn Link" name='linkedin_link' />

                                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button type='submit' color="primary" disabled={!isValid || isSubmitting}>
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