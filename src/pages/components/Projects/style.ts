import styled from 'styled-components'
import { Section } from '@/pages/components/Base/style'

export const ProjectsSection = styled(Section)`
    ul {
        list-style-type: none;
        padding-top: 100px;
        max-width: 1000px;
        margin: auto;

        li {
            margin-bottom: 10rem;

            @media(max-width: 768px) {
                margin-bottom: 5rem;
            }
        }
    }
`;

