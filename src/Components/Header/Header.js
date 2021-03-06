

export default function Header({ user }) {


    return (



        <header id="header" style={{ top: 55 }}>
            <div class="d-flex flex-column">
                <div class="profile">
                    <img src={user.profile_pic} alt="" class="img-fluid rounded-circle" />
                    <h1 class="text-light"><a href="index.html">{user.username}</a></h1>
                    <div class="social-links mt-3 text-center">
                        <a href={user.twitter_link} class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href={user.facebook_link} class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href={user.instagram_link} class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href={user.skype_link} class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href={user.linkedin_link} class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                <nav id="navbar" class="nav-menu navbar" >
                    <ul>
                        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                        <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
                        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>


    )
}
