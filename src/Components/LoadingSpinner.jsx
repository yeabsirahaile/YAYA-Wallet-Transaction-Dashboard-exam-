import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex">
      <div className="w-4 h-4 bg-violet-600 rounded-full animate-pulse mr-1"></div>
      <div className="w-4 h-4 bg-violet-600 rounded-full animate-pulse mr-1"></div>
      <div className="w-4 h-4 bg-violet-600 rounded-full animate-pulse mr-1"></div>
      <div className="w-4 h-4 bg-violet-600 rounded-full animate-pulse"></div>
    </div>
  );
};

export default LoadingSpinner;
