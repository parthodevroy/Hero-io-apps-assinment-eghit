import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <span className="loading loading-spinner text-fuchsia-500 w-16 h-16"></span>
    </div>
  );
};

export default Loader;
