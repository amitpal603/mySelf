import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black  to-[#4bcdcf] px-4">
      <div className="text-center">
        {/* Image */}
        <img
          src="src/assets/not.webp"
          alt="Not Found"
          className="mx-auto w-72 h-auto mb-6"
        />

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-black mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="hover:cursor-pointer  px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Error;
