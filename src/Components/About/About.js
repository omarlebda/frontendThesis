import ProfileModal from '../ProfileModal'
import ProfilePicModal from '../ProfilePicModal'
import { updateProfileById } from "../../Requests/profile"
import { useSnackbar } from 'notistack';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, IconButton } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { updateProfile } from '../../Redux/Global/GlobalActions';
import UploadPhoto from '../UploadPicture';
export default function About({ user, inverted }) {

    const [openProfileDetail, setOpenProfileDetail] = useState(false);
    const [openProfilePicture, setOpenProfilePicture] = useState(false);
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const handleProfileUpdate = (values) => {
        const {
            email,
            phone_number,
            bio,
            birthdate,
            current_city,
            current_job,
            facebook_link,
            twitter_link,
            instagram_link,
            skype_link,
            linkedin_link,
            first_name,
            last_name } = values;

        updateProfileById(user?.id, {
            email,
            phone_number,
            bio,
            birthdate,
            current_city,
            current_job,
            facebook_link,
            twitter_link,
            instagram_link,
            skype_link,
            linkedin_link,
            first_name,
            last_name
        }).then(res => {
            dispatch(updateProfile())
            enqueueSnackbar('Success, You Updated Your Profile ', { variant: 'success' })
        }).catch(err => {

            enqueueSnackbar('Oops, something went wrong ', { variant: 'error' })
        })

        setOpenProfileDetail(false)


    }
    let without_pic = false
    if (!user.profile_pic) {
        without_pic = true
    }
    return (
        <>
            <section id="about" class="about">
                <div class="container">

                    <div class="section-title">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h2>About</h2>
                            {inverted && <> <IconButton style={{ marginLeft: 20 }} onClick={() => setOpenProfileDetail(true)} >
                                <EditIcon style={{ color: '#149DDD' }} />
                            </IconButton></>}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4" data-aos="fade-right">
                            <img src={user.profile_pic} class="img-fluid" alt="" />
                            {inverted && <Button style={{ marginTop: '15px', backgroundColor: '#149DDD' }} variant="contained" color="primary" onClick={() => setOpenProfilePicture(true)}>
                                {
                                    without_pic ? "Add Profile Picture" : "Edit Profile Picture"

                                }
                            </Button>}
                            {/* <UploadPhoto pic={without_pic} /> */}
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3 style={{ marginBottom: '50px' }}>{user.current_job}</h3>
                            <div class="row">
                                <div class="col-lg-6" style={{ marginBottom: '50px' }}>
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{user.birthdate}</span></li>

                                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>{user.current_city}</span></li>
                                    </ul>
                                </div>
                                <div class="col-lg-6" style={{ marginBottom: '50px' }}>
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{user.phone_number}</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{user.email}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                {user.bio}
                            </p>



                            <div class="social-links mt-3 text-center">
                                <a href={user.twitter_link} class="twitter"><i class="bx bxl-twitter"></i></a>
                                <a href={user.facebook_link} class="facebook"><i class="bx bxl-facebook"></i></a>
                                <a href={user.instagram_link} class="instagram"><i class="bx bxl-instagram"></i></a>
                                <a href={user.skype_link} class="google-plus"><i class="bx bxl-skype"></i></a>
                                <a href={user.linkedin_link} class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
            <ProfileModal
                open={openProfileDetail}
                setOpen={setOpenProfileDetail}
                title='Update Profile Details'
                buttonTitle='Update'
                handleSubmit={handleProfileUpdate}
                user={user}
            />
            <ProfilePicModal
                open={openProfilePicture}
                setOpen={setOpenProfilePicture}
                title='Profile Picture'
                buttonTitle='Upload'
                pic={without_pic}
                user={user}
            />

        </>
    )
}
