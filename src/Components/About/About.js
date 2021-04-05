import ProfileModal from '../ProfileModal'
import { updateProfileById } from "../../Requests/profile"
import { useSnackbar } from 'notistack';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

export default function About({ user, inverted }) {

    const [openProfileDetail, setOpenProfileDetail] = useState(false);
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
        console.log(values);
        dispatch(updateProfileById(user?.id, {
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
        })).then(res => {
            enqueueSnackbar('Success, You Updated ', { variant: 'success' })
        }).catch(err => console.log(err))
        setOpenProfileDetail(false)
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
        </>
    )
}
