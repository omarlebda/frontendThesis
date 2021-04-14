import { useEffect, useState } from "react"
import { userLogout } from "../../Redux/Auth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUserById } from "../../Requests/profile"

export default function Navbar({ id }) {
    const [users, setUsers] = useState([])
    const { isAuthenticated } = useSelector(state => state.auth)
    const { currentUser } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const [userError, setUserError] = useState([])

    let history = useHistory();
    return (

        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom" style={{ width: '100%', height: '55px', backgroundColor: '#040B14 !important', position: 'absolute', zIndex: 1000 }}>
            <a class="navbar-brand" href="#">HITs</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" onClick={() => history.push(`/`)}>Home</a>
                    </li>

                    {isAuthenticated ? <> <li class="nav-item">
                        <a class="nav-link" onClick={() => {
                            dispatch(userLogout())
                        }}>Logout</a>
                    </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => {
                                if (id) {
                                    history.push(`/${id}`)
                                }
                            }} >Profile</a>
                        </li>
                    </> : <> <li class="nav-item">
                        <a class="nav-link" onClick={() => history.push(`/login`)}>Login</a>
                    </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => history.push(`/register`)}>Register</a>
                        </li>
                    </>
                    }


                </ul>
            </div>
        </nav>

    )
}
