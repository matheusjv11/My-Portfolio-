import styled from 'styled-components'
import { Section } from '@/styles/base'

export const ContactSection = styled(Section)`
    display: flex;
    color: var(--black-text);

    .wrap {
        max-width: 1000px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;
        margin: auto;

        @media(max-width: 768px) {
            grid-template-columns: 1fr;
            align-content: center;
        }
    }

    .description-card {
        max-width: 500px;

        @media(max-width: 768px) {
            margin-bottom: 2rem;
        }

        h2 {
            margin-bottom: 2rem;
            font-size: 1.7rem;
        }
    }
    
    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        button {
            width: 200px;
        }
    }
`;

