import styled from 'styled-components'
import { Section } from '@/pages/components/Base/style'

export const ContactSection = styled(Section)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        align-content: center;
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

