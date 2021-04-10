import { CompareArrowsOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { fetchUserById, fetchCompanies } from "../../Requests/profile"
import React, { Fragment } from 'react';
import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import Resume from "../../Components/Resume/Resume"
import ToggleButton from "../../Components/Header/ToggleButton"
import About from "../../Components/About/About"
import GraduationProject from "../../Components/GraduationProject/GraduationProject"
import { useDispatch, useSelector } from "react-redux"
import EducationModal from "../../Components/EducationModal"
import { resetUpdateProfile } from "../../Redux/Global/GlobalActions";



export default function UserDetails({ match }) {
    const id = match.params.id
    const [user, setUser] = useState({})
    const [company, setCompany] = useState({})
    const [userError, setUserError] = useState([])
    const { isProfileEdited  } =useSelector(state => state.global)
    const { currentUser } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    

    useEffect(() => {
        if (id) {
            fetchUserById(id).then(res => setUser(res)).catch(err => setUserError(err))
        }
        setTimeout(() => {
            dispatch(resetUpdateProfile())
        }, 1000);
    }, [id, isProfileEdited])

    useEffect(() => {
        fetchCompanies().then(res => setCompany(res)).catch(err => setUserError(err))
    }, [])
    const inverted = user?.user_id === currentUser?.id ? true : false
    return (
        <Fragment>
            <Header key={user.id} user={user} />
            <ToggleButton />
            <Hero key={user.id} user={user} />
            <main id="main">
                <About key={user.id} user={user} inverted={inverted} />
                <Resume key={user.id} user={user} inverted={inverted} company={company} />
                <GraduationProject key={user.id} user={user} inverted={inverted} />
            </main>
            <EducationModal />
        </Fragment>
    )
}
