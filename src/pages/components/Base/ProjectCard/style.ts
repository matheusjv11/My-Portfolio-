import styled from 'styled-components'

export const ProjectCardWrapper = styled.li`
    display: grid;
    position: relative;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    color: var(--light-text);
    align-items: center;

    .project-banner {
        grid-area: 1 / 6 / -1 /-1;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            opacity: 0.2;
            pointer-events: none;
        }

        img {
            max-width: 100%;
            border-radius: var(--radius);
            transition: 0.2s ease-out;
            box-shadow: rgb(0 0 0 / 26%) -3px 7px 10px;
            
            @media (max-width: 660px) {
                height: 410px;
                object-fit: cover;
            }

            &:hover {
                transform: scale(1.05);
            }
        }
    }

    .project-description {
        grid-area: 1 / 1 / -1 / 7;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        text-align: left;

        @media (max-width: 768px) {
            grid-column: 1 / -1 !important;
            padding: 2rem;
        }

        .box {
            padding: 1.5rem;
            border-radius: var(--radius);
            background: var(--dark-purple);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }

        .tech-row {
            display: flex;
            gap: 2rem;
            justify-content: flex-start; 
        }

        .links-row {
            display: flex;
            justify-content: flex-start;
            gap: 1rem;
        }
    }

    @media(min-width: 768px) {
        &:nth-of-type(2n+1) {
            .project-banner {
                grid-column: 1 / 8;
            }

            .project-description {
                grid-column: 7 / -1;
                text-align: right;

                .links-row, .tech-row {
                    justify-content: flex-end; 
                }
            }
        } 
    }
`;

