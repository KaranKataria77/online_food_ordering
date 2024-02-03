import React from "react";

const Spinner = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          border: 8px solid #f3f3f3;
          border-top: 8px solid orange;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
