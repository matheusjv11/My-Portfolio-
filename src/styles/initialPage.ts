import styled from 'styled-components'
import { Section } from '@/styles/base'

export const Image = styled.img`
    max-height: 400px;

    @media (max-width: 768px) {
        max-height: 250px;
    }
`

export const InitialSection = styled(Section)`
    display: flex;
    color: white;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 6rem;
    padding-bottom: 4rem;
    flex-wrap: wrap;
    gap: 3rem;

    @media (max-width: 768px) {
        padding-top: 1.5rem;
    }
`;

export const PresentationText = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 550px;
   color: var(--light-text);
    
    h1 {
        margin-bottom: 1rem;
        font-size: 3.5rem;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }

    h3 {
        margin-bottom: 2rem;
        font-weight: 500;
    }
`
