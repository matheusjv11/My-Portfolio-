import styled from 'styled-components'
import { Section } from '@/pages/components/Base/style'

export const AboutSection = styled(Section)`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    max-width: 1000px;
    
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
        padding: 1rem;
        background: var(--purple);
        color: white;
        border-radius: var(--radius);
    }

    .text {
        p {
            margin-bottom: 1rem;
        }
    }

    .rec-slider-container {
        margin: 0px;
    }

    .rec-arrow {
        display: none;
    }
`;

