import React, { SVGProps } from "react";

interface CustomSVGProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const Logo: React.FC<CustomSVGProps> = ({
  width = 50,
  height = 50,
  fillColor = "url(#paint0_linear_497_10)",
  strokeColor = "url(#paint1_linear_497_10)",
  strokeWidth = 5,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.6512 36.9159C10.8328 36.2405 11.5162 35.8298 12.1978 35.9865L19.1789 37.591C20.3189 37.853 20.5599 39.3697 19.5573 39.9722L10.7165 45.2851C9.71392 45.8876 8.48778 44.9629 8.79147 43.8333L10.6512 36.9159Z"
        fill={fillColor}
      />
      <rect
        x="2.5"
        y="2.5"
        width="45"
        height="35"
        rx="5.5"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M26.9443 20.5835C26.9443 22.9307 25.0415 18.6285 22.6943 18.6285C20.3471 18.6285 18.4443 22.9307 18.4443 20.5835C18.4443 18.2363 20.3471 16.3335 22.6943 16.3335C25.0415 16.3335 26.9443 18.2363 26.9443 20.5835Z"
        fill={fillColor}
      />
      <path
        d="M42.9443 20.5835C42.9443 22.9307 41.0415 18.6285 38.6943 18.6285C36.3471 18.6285 34.4443 22.9307 34.4443 20.5835C34.4443 18.2363 36.3471 16.3335 38.6943 16.3335C41.0415 16.3335 42.9443 18.2363 42.9443 20.5835Z"
        fill={fillColor}
      />
      <defs>
        <linearGradient
          id="paint0_linear_497_10"
          x1="10.9766"
          y1="35.7058"
          x2="16.5237"
          y2="44.9363"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#635EF2" />
          <stop offset="1" stopColor="#8985F2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_497_10"
          x1="25"
          y1="0"
          x2="25"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#635EF2" />
          <stop offset="1" stopColor="#8985F2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_497_10"
          x1="22.6943"
          y1="16.3335"
          x2="22.6943"
          y2="21.2842"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#635EF2" />
          <stop offset="1" stopColor="#8985F2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_497_10"
          x1="38.6943"
          y1="16.3335"
          x2="38.6943"
          y2="21.2842"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#635EF2" />
          <stop offset="1" stopColor="#8985F2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
