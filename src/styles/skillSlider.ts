import styled from "styled-components";

export const Slider = styled.div`
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    background: linear-gradient(-90deg, rgba(2, 0, 36, 0), #f5f4fc 48%);
    content: "";
    height: 100%;
    position: absolute;
    width: 5vw;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotate(180deg);
  }
`;

export const AnimatedDiv = styled.div`
  animation: slider-animation 60s linear infinite;
  display: flex;
  width: calc(var(--card-width) * 18);

  @keyframes slider-animation {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(calc(-140px * 9));
    }
  }

  @keyframes slider-animation-mobile {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(calc(-80px * 9));
    }
  }
`;

export const MainTechCard = styled.div`
  width: var(--card-width);
`;

export const Card = styled.div`
  border: 1px solid rgba(200, 29, 119, 0.31);
  border-radius: 15px;
  height: 100px;
  overflow: visible;
  padding: 0.5rem;
  position: relative;
  width: 100px;

  img {
    height: 100%;
    opacity: 0.8;
    width: 100%;
    object-fit: contain;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 1000px;
  width: 100%;
  --card-width: 140px;

  @media (max-width: 500px) {
    --card-width: 80px;

    ${Card} {
      width: 70px;
      height: 70px;
    }

    ${AnimatedDiv} {
      animation: slider-animation-mobile 60s linear infinite;
    }
  }
`;
