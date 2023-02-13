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
        grid-column: 1 / 8;

        img {
            max-width: 100%;
            border-radius: var(--radius);
        }
    }

    .project-description {
        grid-area: 1 / 1 / -1 / 7;
        grid-column: 7 / -1;
        text-align: right;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .box {
            padding: 1.5rem;
            border-radius: var(--radius);
            background: var(--dark-purple);
        }

        .tech-row {
            display: flex;
            gap: 2rem;
            justify-content: flex-end;  
        }

        .links-row {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
        }
    }
`;

