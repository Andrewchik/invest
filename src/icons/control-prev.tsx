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
      x={0.615}
      y={0.615}
      stroke="#161C2D"
      strokeWidth={1.229}
      rx={14.386}
    />
    <g clipPath="url(#a)">
      <path
        fill="#161C2D"
        d="M20.12 14.416h-7.1l3.259-3.258-.826-.825L10.787 15l4.666 4.666.826-.825-3.258-3.258h7.099v-1.167Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M8.453 8h14v14h-14z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
