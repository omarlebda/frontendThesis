
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import GraduationProjectModal from "../GraduationProjectModal";
import { deleteGraduationProjectById, updateGraduationProjectById } from '../../Requests/graduation';
import { updateGraduationProject, deleteGraduationProject } from "../../Redux/Global/GlobalActions";
import { useDispatch, useSelector } from "react-redux";



export default function ProjectSection({ graduation, inverted, user }) {

    const [open, setOpen] = useState(false)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const handleDeleteGraduationProject = () => {
        deleteGraduationProjectById(graduation?.grad_project?.pk).then(res => {
            enqueueSnackbar('Success, You Deleted ', { variant: 'error' })
            dispatch(deleteGraduationProject())
        }).catch(err => console.log(err))
    }
    const gradProjId = graduation?.grad_project?.pk
    const handleUpdateGraduationProject = (values) => {
        const { title, description, mark, gitLink, graduation } = values;
        updateGraduationProjectById(gradProjId, {
            title,
            description,
            mark,
            gitLink,
            graduation
        }).then(res => {
            enqueueSnackbar('Success, You Updated ', { variant: 'success' })
            dispatch(updateGraduationProject())
        }).catch(err => console.log(err))
        setOpen(false)
    }
    return (

        <>
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon"><i class="bi bi-brightness-high"></i></div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h4 class="title">{graduation?.grad_project?.title}</h4>
                    {inverted && <> <IconButton onClick={() => setOpen(true)} >
                        <EditIcon style={{ color: '#149DDD' }} />
                    </IconButton>
                        <IconButton>
                            <DeleteIcon style={{ color: 'red' }} onClick={handleDeleteGraduationProject} />
                        </IconButton> </>}
                </div>
                <h4 class="title"><a href={graduation?.grad_project?.gitLink}>Link</a></h4>
                <p class="description">{graduation?.degree}</p>
                <p class="description">{graduation?.grad_project?.description}</p>

            </div>

            <GraduationProjectModal
                open={open}
                setOpen={setOpen}
                title='Edit Graduation Project'
                buttonTitle='Update'
                handleSubmit={handleUpdateGraduationProject}
                graduation={graduation}
                user={user}
            />
        </>
    )
}
