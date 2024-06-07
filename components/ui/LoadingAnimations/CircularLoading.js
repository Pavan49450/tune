// components/LoadingSpinner.js

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"
        role="status"
      >
        {/* <span className="visually-hidden">Loading...</span> */}
      </div>
    </div>
  );
};

export default LoadingSpinner;
