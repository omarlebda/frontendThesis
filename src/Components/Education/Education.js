import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteGraduationById, updateGraduationById } from '../../Requests/graduation';
import EducationModal from '../EducationModal'
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { setNestedObjectValues } from 'formik';
import { useDispatch } from "react-redux";
import { updateGraduation, deleteGraduation } from "../../Redux/Global/GlobalActions";

export default function Education({ graduation, inverted, user }) {
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const handleDeleteGraduation = () => {
        deleteGraduationById(graduation?.id).then(res => {
            enqueueSnackbar('Success, You Deleted ', { variant: 'error' })
            dispatch(deleteGraduation())
        }).catch(err => console.log(err))

    }




    const handleUpdateGraduation = (values) => {
        const { faculty, university, desc: description, degree, groupNumber, yearOfGraduation } = values;
        updateGraduationById(graduation?.id, {
            alumni: user.id,
            faculty,
            university,
            description,
            degree,
            groupNumber: groupNumber.toString(),
            yearOfGraduation
        }).then(res => {
            enqueueSnackbar('Success, You Updated ', { variant: 'success' })
            dispatch(updateGraduation())
        }).catch(err => console.log(err))
        setOpen(false)
    }
    console.log(graduation, 'graduation')

    return (
        <>
            <div class="resume-item" >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h4>{graduation.degree}</h4>

                    {inverted && <> <IconButton style={{ marginLeft: 20 }} onClick={() => setOpen(true)} >
                        <EditIcon style={{ color: '#149DDD' }} />
                    </IconButton>
                        <IconButton style={{ marginLeft: 5 }} onClick={handleDeleteGraduation}>
                            <DeleteIcon style={{ color: 'red' }} />
                        </IconButton> </>}
                </div>

                <h5>{graduation?.yearOfGraduation}</h5>
                <p><em>{graduation?.faculty}, {graduation?.university}</em></p>
                <p>{graduation?.description}</p>
            </div>
            <EducationModal
                data={graduation}
                open={open}
                setOpen={setOpen}
                title='Update Graduations'
                buttonTitle='Update'
                handleSubmit={handleUpdateGraduation} />
        </>
    )
}


