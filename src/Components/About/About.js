

export default function About({user}) {


    return (
        
        <section id="about" class="about">
            <div class="container">

                <div class="section-title">
                    <h2>About</h2>
                    </div>

                <div class="row">
                    <div class="col-lg-4" data-aos="fade-right">
                        <img src={user.profile_pic} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3 style={{marginBottom : '50px'}}>{user.current_job}</h3>
                        <div class="row">
                        <div class="col-lg-6" style={{marginBottom : '50px'}}>
                            <ul>
                            <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{user.birthdate}</span></li>

                            <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>{user.current_city}</span></li>
                            </ul>
                        </div>
                        <div class="col-lg-6" style={{marginBottom : '50px'}}>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{user.phone_number}</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{user.email}</span></li>
                            </ul>
                        </div>
                        </div>
                        <p>
                        {user.bio}
                        </p>
                    </div>
                </div>

            </div>
        </section>
        
    )
}
