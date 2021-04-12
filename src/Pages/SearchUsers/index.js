import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../Requests/profile'
import Card from '../../Components/Card'
import SearchResult from '../../Components/SearchResult'
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


export default function SearchUsers({ match }) {

    const [users, setUsers] = useState([])



    useEffect(() => {
        fetchUsers()
            .then(res => {
                setUsers(res)
            })
            .catch(err => console.log(err))
    }, [])

    let searchResult = users?.filter(user => user.first_name.toLowerCase().includes(match.params.keyword.toLowerCase()))

    console.log(searchResult)
    return (
        <>
            <Typography variant="h3" gutterBottom style={{ textAlign: 'center', paddingTop: 100 }}>
                Search Results
            </Typography>
            <Container>
                <div className='flex'>
                    {searchResult?.map(user => <SearchResult key={user.id} user={user} />)}
                </div>

            </Container>
        </>
    )
}
