import styled from 'styled-components'
import { Section } from './base'

export const AboutSection = styled(Section)`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    max-width: 1000px;
    align-content: center;
    color: var(--black-text);
    
    > div {
        flex: 1 1 0;
        min-width: 277px;

        @media (max-width: 350px) {
            min-width: unset;
        }
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
        p:not(:last-of-type){
            margin-bottom: 1rem;
        }
    }

    .rec-slider-container {
        margin: 0px;
    }

    .rec-arrow {
        display: none;
    }

    .rec-item-wrapper {
        height: 100%;
    }
`;

