import styled from 'styled-components'

export const MobileHeaderWrapper = styled.div`
    display: none;
    position: fixed;
    z-index: 10;
    right: 2rem;
    top: 2rem;
    background: var(--purple);
    color: var(--white);
    border-radius: 25px;

    .MuiButtonBase-root {
        color: var(--bg-color);
    }

    @media (max-width: 768px) {
        display: block;
    }
`