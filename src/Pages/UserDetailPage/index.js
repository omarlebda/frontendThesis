import { CompareArrowsOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react"
import Graduation from "../../Components/Card/Graduation"
import PersonalInfo from "../../Components/Card/PersonalInfo"
import { fetchUserById } from "../../Requests/profile"
import React, {Fragment} from 'react';
import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import Resume from "../../Components/Resume/Resume"
import ToggleButton from "../../Components/Header/ToggleButton"
import About from "../../Components/About/About"
import GraduationProject from "../../Components/GraduationProject/GraduationProject"
import { useSelector } from "react-redux"
import EducationModal from "../../Components/EducationModal"



export default function UserDetails({match}) {
    const id = match.params.id
    const [user, setUser] = useState({})
    const [userError, setUserError] = useState([])
    const { currentUser } = useSelector(state => state.auth)

    useEffect(() => {
        fetchUserById(id).then(res => setUser(res)).catch(err => setUserError(err))     
    }, [id])
    const inverted = user?.user_id === currentUser?.id ? true : false
    return (
        <Fragment>
            <Header key={user.id} user={user}/>
            <ToggleButton/>
            <Hero key={user.id} user={user}/>
            <main id="main">
                <About  key={user.id} user={user} />
                <Resume key={user.id} user={user} inverted={inverted}/>
                <GraduationProject key={user.id} user={user}/>
            </main>
            <EducationModal />
        </Fragment>
    )
}
