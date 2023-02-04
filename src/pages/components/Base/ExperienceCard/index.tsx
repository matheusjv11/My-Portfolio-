import { Expericence } from "@/types/Experience";
import { Card, RoleInfos } from "./style";

/* referencia daqui https://olaolu.dev/work/ */

export default function ExperienceCard ({
    role,
    resposibilities,
    start,
    end,
    logo
}: Expericence) {
    return ( 
        <>
            <Card>
                <figure>
                    <img src={logo} alt="Company's logo" />
                </figure>
                <RoleInfos>
                    <p className="period">{start} - {end}</p>
                    <h4>{role}</h4>
                    <ul>
                        {resposibilities.map((resp) => {
                            return <li>
                                <p>{resp}</p>
                            </li>
                        })}
                    </ul>
                </RoleInfos>
            </Card>
        </>
    )
}