import { CompareArrowsOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { fetchUserById } from "../../Requests/profile"

export default function UserDetails({match}) {
    const id = match.params.id
    const [user, setUser] = useState({})
    const [userError, setUserError] = useState([])

    useEffect(() => {
        fetchUserById(id).then(res => setUser(res)).catch(err => setUserError(err))     
    }, [id])
    return (
        <div>
            <h1>{user.username}</h1>
        </div>
    )
}
