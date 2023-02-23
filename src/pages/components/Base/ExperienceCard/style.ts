import styled from 'styled-components'

export const Card = styled.div`
    background: var(--purple);
    color: var(--light-text);
    border-radius: var(--radius);
    box-shadow: rgb(67 71 85 / 27%) 0px 0px 0.25em, rgb(90 125 188 / 5%) 0px 0.25em 1em;
    padding: 1rem;
    position: relative;

    .period {
        font-style: italic;
    }

    ul {
        padding: 1rem;
        list-style: none;
    }

    a {
        text-decoration: underline;  
    }

    li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 1rem;

        &::before {
            content: "▹";
            position: absolute;
            left: 0px;
            color: white;
        }
    }

    .border-footer {
        position: absolute;
        height: 25px;
        background: white;
        bottom: 0;
        width: 100%;
        left: 0;
        border-radius: 105px 105px 5px 5px;
    }
`