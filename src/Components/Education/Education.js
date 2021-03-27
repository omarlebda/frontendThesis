
export default function Education({graduation}) {


    return (
        
        <div class="resume-item">
            <h4>{graduation.degree}</h4>
            <h5>{graduation.yearOfGraduation}</h5>
            <p><em>{graduation.faculty}, {graduation.university}</em></p>
            <p>{graduation.description}</p>
        </div>
        
    )
}
