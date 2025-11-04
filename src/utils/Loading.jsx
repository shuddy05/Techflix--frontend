import React, { useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#FC4747");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#10141e]">
      <svg width="48" height="48" viewBox="0 0 50 50" aria-hidden>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="31.4 31.4"
          strokeLinecap="round"
          color={color}
          loading="true"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            from="0 25 25"
            to="360 25 25"
          />
        </circle>
      </svg>
      <span className="ml-3">Loading...</span>
    </div>
  );
};

export default Loading;
