import styled from "styled-components";

const StyledLoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 160px 0;
  position: absolute;
  top: calc(50% - 175px);
  left: calc(50% - 25px);

  .ring {
    --uib-size: 80px;
    --uib-speed: 2s;
    --uib-color: black;

    height: var(--uib-size);
    width: var(--uib-size);
    vertical-align: middle;
    transform-origin: center;
    animation: rotate var(--uib-speed) linear infinite;
  }

  .ring circle {
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes stretch {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -124px;
    }
  }
`;

const LoadingSpinner = () => {
  return (
    <StyledLoadingSpinner>
      <svg className="ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
