import StyledLoadingSpinner from "./StyledLoadingSpinner";

const LoadingSpinner = () => {
  return (
    <StyledLoadingSpinner>
      <div data-testid="spinner">
        <svg className="ring" viewBox="25 25 50 50" strokeWidth="5">
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
