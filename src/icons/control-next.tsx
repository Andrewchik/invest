import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <rect
      width={28.771}
      height={28.771}
      x={-0.615}
      y={0.615}
      stroke="#161C2D"
      strokeWidth={1.229}
      rx={14.386}
      transform="matrix(-1 0 0 1 28.77 0)"
    />
    <g clipPath="url(#a)">
      <path
        fill="#161C2D"
        d="M9.88 14.416h7.1l-3.259-3.258.826-.825L19.213 15l-4.666 4.666-.826-.825 3.258-3.258H9.88v-1.167Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M21.547 8h-14v14h14z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
