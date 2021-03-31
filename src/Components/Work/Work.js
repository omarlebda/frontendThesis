
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteWorkById, updateWorkById } from '../../Requests/work';
import WordModal from '../WorkModal'

import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { setNestedObjectValues } from 'formik';
export default function Work({ work, inverted, user }) {

    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false)

    const handleDeleteWork = () => {
        deleteWorkById(work?.id).then(res => {
            enqueueSnackbar('Success, You Deleted ', { variant: 'error' })
        }).catch(err => console.log(err))
    }

    const handleUpdateWork = (values) => {
        const { position, startDate, endDate, company } = values;
        updateWorkById(work?.id, {
            alumni: user.id,
            position,
            startDate,
            endDate,
            company
        }).then(res => {
            enqueueSnackbar('Success, You Updated ', { variant: 'success' })
        }).catch(err => console.log(err))
        setOpen(false)
    }
    return (
        <>
            <div class="resume-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h4>{work.position}</h4>
                    {inverted && <> <IconButton style={{ marginLeft: 20 }} onClick={() => setOpen(true)} >
                        <EditIcon style={{ color: '#149DDD' }} />
                    </IconButton>
                        <IconButton style={{ marginLeft: 5 }} onClick={handleDeleteWork}>
                            <DeleteIcon style={{ color: 'red' }} />
                        </IconButton> </>}
                </div>
                <h5>{work.startDate} - {work.endDate}</h5>
                <p><em>{work.company.name}</em></p>
                <p><em>{work.company.address}</em></p>
            </div>
            <WordModal
                open={open}
                setOpen={setOpen}
                title='Update New Work Experience'
                buttonTitle='Update'
                handleSubmit={handleUpdateWork}
                work={work}
            />
        </>
    )
}
