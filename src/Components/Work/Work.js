
export default function Work({work}) {


    return (
        
        <div class="resume-item">
            <h4>{work.position}</h4>
            <h5>{work.startDate} - {work.endDate}</h5>
            <p><em>{work.company.name}</em></p>
            <p><em>{work.company.address}</em></p>
        </div>
        
    )
}
