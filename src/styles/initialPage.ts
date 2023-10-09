import styled from "styled-components";
import { Section } from "@/styles/base";

export const Image = styled.img`
  max-height: 400px;
  z-index: 2;

  @media (max-width: 768px) {
    max-height: 35vh;
  }
`;

export const InitialSection = styled(Section)`
  display: flex;
  color: white;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  padding-bottom: 4rem;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 768px) {
    padding-top: 10vh;
    gap: 0px;
    align-items: flex-start;
    padding: 4.8rem;
  }
`;

export const PresentationText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  color: var(--light-text);

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.8rem, calc(0.8 * 4.5vw), 4rem);
  }

  h3 {
    font-size: clamp(1rem, calc(0.8 * 1.5vw), 4rem);
    margin-bottom: 2rem;
    font-weight: 500;
  }

  p {
    max-width: 485px;
  }
`;
