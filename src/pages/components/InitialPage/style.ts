import styled from 'styled-components'
import { Section } from '@/pages/components/Base/style'

export const Image = styled.img`
    max-height: 400px;
`

export const InitialSection = styled(Section)`
    display: flex;
    color: white;
    position: relative;
    justify-content: center;
    align-items: center;
`;

export const PresentationText = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 550px;
   color: var(--light-text);
    
    h1 {
        margin-bottom: 1rem;
        font-size: 3.5rem;
    }

    h3 {
        margin-bottom: 2rem;
        font-weight: 500;
    }
`
