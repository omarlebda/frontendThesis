import Education from "../Education/Education";
import Work from "../Work/Work";
import ModalEducation from '../EducationModal'
import WordModal from '../WorkModal'
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewGraduation } from "../../Redux/Graduation/GraduationActions";
import { createNewWork } from "../../Redux/Work/WorkActions";
import { createNewCompany } from "../../Redux/Company/CompanyActions"
import { updateProfileById } from "../../Requests/profile"
import { useSnackbar } from 'notistack';
import ProfileModal from '../ProfileModal'
import CompanyModel from '../CompanyModel'
import { createCompany, createGraduation, createWork } from "../../Redux/Global/GlobalActions";



export default function Resume({ user, inverted, company }) {

  const [open, setOpen] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [openComp, setOpenComp] = useState(false)
  const { success } = useSelector(state => state.createGraduation)
  const { successWork } = useSelector(state => state.work)
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
      enqueueSnackbar('Success, Graduation Createed ', { variant: 'success' })
      dispatch(createGraduation())
      setOpen(false)

    } else {
      enqueueSnackbar('Oops, please try again ', { variant: 'error' })
    }
  }

  const handleWorkSubmit = (values) => {
    const { position, startDate, endDate, company } = values;
    console.log(values);
    dispatch(createNewWork({
      alumni: user.id,
      position,
      startDate,
      endDate,
      company,
    })).then(res => {
      enqueueSnackbar('Success, Work experience created ', { variant: 'success' })
      dispatch(createWork())
      setOpenWork(false)
    }).catch(err => enqueueSnackbar('Oops, please try again ', { variant: 'error' }))
  }


  const handleCompanySubmit = (values) => {
    const { name, address, email, information } = values;
    dispatch(createNewCompany({
      name,
      address,
      email,
      information,
    })).then(res => {
      enqueueSnackbar('Success, Createed ', { variant: 'success' })
      setOpenComp(false)
      dispatch(createCompany())
    }).catch(err => enqueueSnackbar('Oops, teed ', { variant: 'error' }))
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 class="resume-title">Professional Experience</h3>
                {inverted && <IconButton style={{ marginLeft: 20 }} onClick={() => setOpenWork(true)}>
                  <AddIcon style={{ color: '#149DDD' }} />
                </IconButton>
                }
              </div>

              {user?.work?.map((work) => (
                <Work key={work.id} work={work} inverted={inverted} user={user} company={company} />
              ))
              }
              {inverted && <button onClick={() => setOpenComp(true)} className="btn mt-3" style={{ color: '#fff', backgroundColor: '#149DDD' }}>Add Company</button>}
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
      <WordModal
        open={openWork}
        setOpen={setOpenWork}
        title='Create New Work Experience'
        buttonTitle='Create'
        handleSubmit={handleWorkSubmit}
        company={company}
      />
      <CompanyModel
        open={openComp}
        setOpen={setOpenComp}
        title='Create New Company'
        buttonTitle='Create'
        handleSubmit={handleCompanySubmit}
      />

    </>
  )
}
