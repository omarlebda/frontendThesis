

export default function ProjectSection({ graduation }) {


    return (


        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon"><i class="bi bi-brightness-high"></i></div>
            <h4 class="title"><a href="">{graduation?.grad_project?.title}</a></h4>
            <p class="description">{graduation?.grad_project?.description}</p>
        </div>

    )
}
