import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={8}
    fill="none"
    {...props}
  >
    <path
      fill="#161C2D"
      fillRule="evenodd"
      d="M0 1L5 6L10 1H0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
