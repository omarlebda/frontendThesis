import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../Requests/profile'
import Card from '../../Components/Card'
import SearchResult from '../../Components/SearchResult'
import Typography from '@material-ui/core/Typography';


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
            <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
                Search Results
            </Typography>
            <div className='flex_wrap'>
                {searchResult?.map(user => <SearchResult key={user.id} user={user} />)}
            </div>
        </>
    )
}
