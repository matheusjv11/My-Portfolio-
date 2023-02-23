import styled from 'styled-components'

export const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    padding: 2rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`

const textColors = {
    white: 'var(--light-text)',
    black: 'black'
}

export const SecondTitle = styled.h3`
    margin-bottom: 2rem;
    font-size: 1.7rem;
    color: ${props => props.color ? textColors[props.color] : textColors.black};
`