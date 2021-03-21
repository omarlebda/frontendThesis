import { useEffect, useState } from "react"
import { fetchUsers } from "../../Requests/profile";
import Card from '../../Components/Card'
import Loading from "../../Components/Loading/Loading";


export default function Users() {

    const [users, setUsers] = useState([])
    const [usersError, setUsersError] = useState([])
  
  
    useEffect(()=>{
      fetchUsers()
        .then(res =>{
          setUsers(res)
        })
        .catch(err => setUsersError(err))
    },[])

    if (users.length < 1) return <Loading />
    return (
        <div className='flex_wrap'>
            {users?.map(user => <Card key={user.id} user={user} />)}
        </div>
    )
}
