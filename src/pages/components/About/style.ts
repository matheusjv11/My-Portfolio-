import styled from 'styled-components'
import { Section } from '@/pages/components/Base/style'

export const AboutSection = styled(Section)`
    display: flex;
    gap: 4rem;
    padding-top: 7rem;
    
    > div {
        flex: 1 1 0;
    }

    h3 {
        margin-bottom: 2rem;
        font-size: 1.7rem;
    }

    .myself__paragraph {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .skill__container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .skill__badge {
        padding: 1rem 2rem;
        background: var(--purple);
        color: white;
        border-radius: 5px;
    }
`;

