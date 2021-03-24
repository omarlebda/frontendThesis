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



export default function UserDetails({match}) {
    const id = match.params.id
    const [user, setUser] = useState({})
    const [userError, setUserError] = useState([])

    useEffect(() => {
        fetchUserById(id).then(res => setUser(res)).catch(err => setUserError(err))     
    }, [id])
    return (
        <Fragment>
            <Header key={user.id} user={user}/>
            <ToggleButton/>
            <Hero />
            <main id="main">
                <Resume key={user.id} user={user}/>
            </main>
            
        </Fragment>
    )
}
