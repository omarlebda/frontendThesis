import { CompareArrowsOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { fetchUserById } from "../../Requests/profile"

export default function UserDetails({match}) {
    const id = match.params.id
    const [user, setUser] = useState({})
    const [userError, setUserError] = useState([])

    useEffect(() => {
        fetchUserById(id).then(res => console.log(res)).catch(err => console.log(err))     
    }, [id])
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
