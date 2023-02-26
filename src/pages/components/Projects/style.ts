import styled from 'styled-components'
import { Section } from '@/pages/components/Base/style'

export const ProjectsSection = styled(Section)`
    ul {
        list-style-type: none;

        li:not(:last-of-type) {
            margin-bottom: 8rem;

            @media(max-width: 768px) {
                margin-bottom: 5rem;
            }
        }
    }

    .section__title, ul {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 4rem;
    }

    .section__title:first-of-type {
        text-align: center;
    }
`;

