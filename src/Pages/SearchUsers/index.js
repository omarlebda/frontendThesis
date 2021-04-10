import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../Requests/profile'

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
        <div>
            {match.params.keyword}
        </div>
    )
}
