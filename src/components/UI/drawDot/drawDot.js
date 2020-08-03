import React from "react";

export default function drawDot(index) {
  const dotColorSchema = [
    "#b2a0bb",
    "#ddc2ba",
    "#72bfb3",
    "#759992",
    "#D9B797",
    "#D7C4C9",
    "#BFAAC9",
    "#82ABDB",
  ];
  const color = dotColorSchema[index];
  return (
    <svg width="10" height="10">
      <g>
        <circle
          cx="4"
          cy="4"
          r="4"
          stroke="none"
          strokeWidth="0"
          fill={color}
        />
      </g>
    </svg>
  );
}
