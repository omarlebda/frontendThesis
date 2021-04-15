import ProjectSection from "../ProjectSection/ProjectSection";
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import GraduationProjectModal from "../GraduationProjectModal";
import { createNewGraduationProject } from "../../Redux/GraduationProject/GraduationProjectActions"
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from 'notistack';
import { createGraduationProject } from "../../Redux/Global/GlobalActions";



export default function GraduationProject({ user, inverted }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = (values) => {
    const { title, description, mark, gitLink, graduation } = values;
    dispatch(createNewGraduationProject({
      title,
      description,
      mark,
      gitLink,
      graduation,
    })).then(res => {
      enqueueSnackbar('Success, Graduation Project Created ', { variant: 'success' })
      dispatch(createGraduationProject())
    }).catch(err => enqueueSnackbar('Oops, please try again ', { variant: 'error' }))
    setOpen(false)
  }
  return (

    <>
      <section id="services" class="services">
        <div class="container">

          <div class="section-title">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2>Graduation Projects</h2>
              {inverted && <IconButton style={{ marginLeft: 20, paddingBottom: 50 }} onClick={() => setOpen(true)}>
                <AddIcon style={{ color: '#149DDD' }} />
              </IconButton>
              }
            </div>
          </div>

          <div className="flex">

            {user?.graduation?.map((graduation) => (
              graduation?.grad_project?.title && <ProjectSection key={graduation.id} graduation={graduation} inverted={inverted} user={user} />
            ))
            }
          </div>

        </div>
      </section>
      <GraduationProjectModal
        open={open}
        setOpen={setOpen}
        title='Add New Graduation Project'
        buttonTitle='Add'
        user={user}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
