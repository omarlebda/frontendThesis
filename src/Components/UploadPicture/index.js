import styles from './styleProfile.module.css'
import classNames from 'classnames'
import BackupIcon from '@material-ui/icons/Backup';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import { IconButton } from '@material-ui/core';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { baseURL } from '../../Requests/config';
import { addProfilePicture } from '../../Redux/Global/GlobalActions';
import { useDispatch } from "react-redux";

function UploadPhoto({ pic, setOpen, user }) {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const { currentUser } = useSelector(state => state.auth)
    const fileInputRef = useRef();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    const handleClick = () => {
        const fd = new FormData();

        const config = {
            headers: {
                'Content-Type': "multipart/form-data",
                "Accept": "*/*",
                Authorization: `Bearer ${currentUser.token}`,
            },
        }
        fd.append('profile_pic', image, image.name);

        axios.put(`${baseURL}/api/v1/edit_picture/${user.id}/`, fd, config)
            .then(res => {
                console.log(res)
                dispatch(addProfilePicture())
                enqueueSnackbar('Success, Photo has been Uploaded', { variant: 'success' });
                setOpen(false)
            })
            .catch(error => {
                console.log(error)
                enqueueSnackbar('Oops, Sorry try again :)', { variant: 'error' });
                setOpen(false)
            })


    }

    return (
        <div className={styles.container} style={{ margin: '50px' }}>
            <form>
                {preview ? (
                    <img
                        src={preview}
                        className={styles.img}
                        style={{ objectFit: "cover" }}
                        onClick={() => {
                            setImage(null);
                        }}
                    />
                ) : (
                    <button
                        className={classNames(styles.btn, 'flex_col')}
                        onClick={(event) => {
                            event.preventDefault();
                            fileInputRef.current.click();
                        }}
                    >
                        <BackupIcon fontSize='large' />
             Add  Image
                    </button>
                )}
                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        if (file) {
                            setImage(file);
                        } else {
                            setImage(null);
                        }
                    }}
                />
            </form>
            {
                <button className={styles.uploadBtn}>
                    <IconButton onClick={() => handleClick()}>
                        <CheckCircleIcon fontSize='large' style={{ color: 'white' }} />
                    </IconButton>
                </button>}
        </div>

    )
}

export default UploadPhoto