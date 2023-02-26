import { Expericence } from "@/types/Experience"
import { Card } from "@/styles/experienceCard"

export default function ExperienceCard ({
    role,
    resposibilities,
    start,
    end,
    company,
    linkedin
}: Expericence) {
    return ( 
        <Card>
            <p className="period">{start} - {end}</p>
            <h4>{role} @ <a href={linkedin}>{company}</a></h4>
            <ul>
                {resposibilities?.map((resp, index) => {
                    return <li key={index}>
                        <p>{resp}</p>
                    </li>
                })}
            </ul>
            <div className="border-footer"></div>
        </Card>
    )
}