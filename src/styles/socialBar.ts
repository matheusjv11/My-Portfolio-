import styled from 'styled-components'

export const SocialBarWrap = styled.div`
    display: flex;
    gap: 1.5rem;

    &.fixed {
        position: absolute;
        left: 1rem;
        flex-direction: column;
        top: 35%;
        
        a{
            transition: all 0.1s ease-in;
            
            &:hover {
               transform: scale(1.1);
           }
        }

        img {
            height: 100%;
            width: 30px; 
        }   
    }

    img {
        height: 30px;
        border-radius: 5px;
    }
`;

