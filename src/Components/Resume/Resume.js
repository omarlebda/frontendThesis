import Education from "../Education/Education";
import Work from "../Work/Work";

export default function Resume({user}) {


    return (
        
        <section id="resume" class="resume">
          <div class="container">
    
            <div class="section-title">
              <h2>Resume</h2>
            </div>
    
            <div class="row">
              <div class="col-lg-6" data-aos="fade-up">
                <h3 class="resume-title">Education</h3>
                { user?.graduation?.map((graduation) =>(
                    <Education key={graduation.id} graduation={graduation}/>
                  ))
                }
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 class="resume-title">Professional Experience</h3>
                { user?.work?.map((work) =>(
                    <Work key={work.id} work={work}/>
                  ))
                }
              </div>
            </div>
    
          </div>
        </section>
        
    )
}
