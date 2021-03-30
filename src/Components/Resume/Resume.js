import Education from "../Education/Education";
import Work from "../Work/Work";

import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
export default function Resume({ user, inverted }) {


  return (

    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h3 class="resume-title">Education</h3>
              {inverted && <IconButton style={{ marginLeft: 20 }}>
                <AddIcon style={{ color: '#149DDD' }} />
              </IconButton>
              }

            </div>
            {user?.graduation?.map((graduation) => (
              <Education key={graduation.id} graduation={graduation} inverted={inverted} />
            ))
            }
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            {user?.work?.map((work) => (
              <Work key={work.id} work={work} />
            ))
            }
          </div>
        </div>

      </div>
    </section>

  )
}
