import styled from 'styled-components'

export const List = styled.ul`
    position: fixed;
    top: 0px;
    width: 100%;
    left: 0px;    
    list-style: none;
    display: flex;
    gap: 2rem;
    font-weight: 300;
    font-size: 1.5rem;
    padding: 1rem 0px;
    justify-content: center;

    li {
        float: left;
        color: white;
    }
`