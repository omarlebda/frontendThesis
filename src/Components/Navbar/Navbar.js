import { useEffect, useState } from "react"
import { userLogout } from "../../Redux/Auth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Navbar() {
    const [users, setUsers] = useState([])
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    let history = useHistory();
    return (

        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom" style={{ backgroundColor: '#040B14 !important' }}>
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
                            <a class="nav-link" href="#">Profile</a>
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
