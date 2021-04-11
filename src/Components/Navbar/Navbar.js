import { useEffect, useState } from "react"
import { userLogout } from "../../Redux/Auth/AuthActions";
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {
    const [users, setUsers] = useState([])
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>

                    {isAuthenticated && <li class="nav-item">
                        <a class="nav-link" href="#" onClick={() => {
                            dispatch(userLogout())
                        }}>Logout</a>
                    </li>}


                </ul>
            </div>
        </nav>

    )
}
