import Education from "../Education/Education";
import Work from "../Work/Work";
import ModalEducation from '../EducationModal'
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewGraduation } from "../../Redux/Graduation/GraduationActions";
import { useSnackbar } from 'notistack';

export default function Resume({ user, inverted }) {

  const [open, setOpen] = useState(false);
  const { success } = useSelector(state => state.createGraduation)
  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (values) => {
    const { faculty, university, desc: description, degree, groupNumber, yearOfGraduation } = values;
    dispatch(createNewGraduation({
      alumni: user.id,
      yearOfGraduation,
      degree,
      university,
      faculty,
      groupNumber: groupNumber.toString(),
      description
    }))
    if (success) {
      enqueueSnackbar('Success, Createed ', { variant: 'success' })
      setOpen(false)

    } else {
      enqueueSnackbar('Oops, teed ', { variant: 'error' })

    }
  }


  return (
    <>
      <section id="resume" class="resume">
        <div class="container">

          <div class="section-title">
            <h2>Resume</h2>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 class="resume-title">Education</h3>
                {inverted && <IconButton style={{ marginLeft: 20 }} onClick={() => setOpen(true)}>
                  <AddIcon style={{ color: '#149DDD' }} />
                </IconButton>
                }

              </div>
              {user?.graduation?.map((graduation) => (
                <Education key={graduation.id} graduation={graduation} inverted={inverted} user={user} />
              ))
              }
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Professional Experience</h3>
              {user?.work?.map((work) => (
                <Work key={work.id} work={work} />
              ))
              }
            </div>
          </div>

        </div>
      </section>
      <ModalEducation
        open={open}
        setOpen={setOpen}
        title='Create New Education Degree'
        buttonTitle='Create'
        handleSubmit={handleSubmit}
      />
    </>
  )
}
