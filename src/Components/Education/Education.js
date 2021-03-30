import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
export default function Education({ graduation, inverted }) {


    return (

        <div class="resume-item" >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h4>{graduation.degree}</h4>

                {inverted && <> <IconButton style={{ marginLeft: 20 }}>
                    <EditIcon style={{ color: '#149DDD' }} />
                </IconButton>
                    <IconButton style={{ marginLeft: 5 }}>
                        <DeleteIcon style={{ color: 'red' }} />
                    </IconButton> </>}
            </div>

            <h5>{graduation.yearOfGraduation}</h5>
            <p><em>{graduation.faculty}, {graduation.university}</em></p>
            <p>{graduation.description}</p>
        </div>

    )
}
