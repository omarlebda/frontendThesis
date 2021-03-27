import ProjectSection from "../ProjectSection/ProjectSection";


export default function GraduationProject({user}) {


    return (
        
        
        <section id="services" class="services">
        <div class="container">
  
          <div class="section-title">
            <h2>Graduation Projects</h2>
          </div>
  
          <div class="row">
          { user?.graduation?.map((graduation) =>(
                    <ProjectSection key={graduation.id} graduation={graduation}/>
                  ))
                }
          </div>
  
        </div>
      </section>
        
    )
}
