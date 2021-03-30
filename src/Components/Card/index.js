import { Button, Card } from '@material-ui/core'
import React from 'react'
import { useHistory } from "react-router-dom";

export default function Index({user}) {

    let history = useHistory();


    return (
        <Card style={{padding: 20}}>
            <h3>{user.username}</h3>
            { user?.work?.map((work, i) =>(
                    <p key={i}>{work.position} at {work.company.name}</p>
                ))
            }
            <Button variant='outlined' onClick={()=> history.push(`/${user.id}`)} >Visit Profile</Button>
        </Card>
    )
}
