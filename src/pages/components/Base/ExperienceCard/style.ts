import styled from 'styled-components'

export const Card = styled.div`
    background: #f9f9f9;
    border-radius: var(--radius);
    box-shadow: rgb(67 71 85 / 27%) 0px 0px 0.25em, rgb(90 125 188 / 5%) 0px 0.25em 1em;

    figure {
        background: white;
        display: flex;
        justify-content: center;
        padding: 1rem;
        border-radius: var(--radius);
        min-height: 107px;
        align-items: center;

        img {
            max-height: 10vh;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
            height: 107px;
        }
    }
`

export const RoleInfos = styled.div`
    padding: 1rem;

    .period {
        font-style: italic;
    }

    ul {
        padding: 1rem;
        list-style: none;
    }

    li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 1rem;

        &::before {
            content: "▹";
            position: absolute;
            left: 0px;
            color: var(--purple);
        }
    }
`