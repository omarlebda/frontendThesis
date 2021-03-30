import { useEffect, useState } from "react"
import { fetchUsers } from "../../Requests/profile";
import Card from '../../Components/Card'
import Loading from "../../Components/Loading/Loading";
import CustomButton from "../../Components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Redux/Auth/AuthActions";


export default function Users() {

  const [users, setUsers] = useState([])
  const [usersError, setUsersError] = useState([])
  const { isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()


  useEffect(() => {
    fetchUsers()
      .then(res => {
        setUsers(res)
      })
      .catch(err => setUsersError(err))
  }, [])

  if (users.length < 1) return <Loading />
  return (
    <>
      {isAuthenticated && <CustomButton title='logout' onClick={() => {
        dispatch(userLogout())
      }} />}
      <div className='flex_wrap'>
        {users?.map(user => <Card key={user.id} user={user} />)}
      </div>
    </>
  )
}
