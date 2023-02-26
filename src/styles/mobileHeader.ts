import styled from 'styled-components'

export const MobileHeaderWrapper = styled.div`
    display: none;
    position: fixed;
    z-index: 10;
    right: 2rem;
    top: 2rem;
    backdrop-filter: blur(15px);
    mix-blend-mode: difference;
    border-radius: 25px;

    .MuiButtonBase-root {
        color: var(--bg-color);
    }

    @media (max-width: 768px) {
        display: block;
    }
`