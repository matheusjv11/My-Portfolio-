import styled from 'styled-components'

export const FooterWrap = styled.footer`
    background: var(--purple);
    width: 100%;
    padding: 2.5rem 2.5rem 0rem 2.5rem;
    color: var(--light-text);

    main {
        max-width: 1000px;
        margin: auto;
        display: flex;
        gap: 5rem;
        justify-content: space-between;
        border-bottom: 1px solid var(--light-text);
        padding-bottom: 2rem;

        @media (max-width: 768px) {
            p {
                font-size: 13px;
            }
            
            gap: 2rem;
            flex-direction: column;
        }
        
        h3 {
            margin-bottom: 1.5rem;
        }

        .about {
            max-width: 500px;
        }
    }

    .finalCredits {
        text-align: center;
        padding: 2rem;
        font-size: 12px;
        font-weight: 700;
    }
`;

