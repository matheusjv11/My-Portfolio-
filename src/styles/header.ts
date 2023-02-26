import styled from 'styled-components'

export const List = styled.ul`
    position: fixed;
    top: ${props => props.hidden ? '-4rem' : '1rem'};  
    list-style: none;
    display: flex;
    gap: 2rem;
    font-weight: 300;
    font-size: 1.5rem;
    justify-content: center;
    z-index: 2;
    backdrop-filter: blur(15px);
    width: fit-content;
    padding: 1rem 3rem;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
    mix-blend-mode: difference;
    transition: top 0.3s ease-in-out;

    @media (max-width: 768px) {
        display: none;
    }

    li {
        float: left;
        color: white;
        font-size: 18px
    }
`