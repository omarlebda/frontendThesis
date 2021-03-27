

export default function Hero({user}) {


    return (
        
        
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container" data-aos="fade-in">
                <h1>{user.first_name} {user.last_name}</h1>
                <p>I'm HITs Alumni<span class="typed" data-typed-items="TSU, Alumni"></span></p>
                </div>
            </section>
        
    )
}
