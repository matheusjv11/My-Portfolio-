import styled from 'styled-components'
import { Section } from '@/styles/base'

export const ContactSection = styled(Section)`
    display: flex;
    color: var(--black-text);

    .wrap {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        align-items: center;
        margin: auto;

        @media(max-width: 768px) {
            grid-template-columns: 1fr;
            align-content: center;
        }

        button {
            padding: 1rem;
            background-color: var(--purple);
            color: var(--light-text);
            border: none;
            font-size: 1rem;
            font-weight: bold;
            border-radius: var(--radius);
            cursor: pointer;
            transition: all 0.1s ease-in;
            box-shadow: rgb(67 71 85 / 27%) 0px 0px 0.45em, rgb(90 125 188 / 5%) 0px 0.25em 1em;

            &:hover {
                transform: scale(1.1);
            }
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

