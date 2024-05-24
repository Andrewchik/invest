import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#D31627"
      fillRule="evenodd"
      d="m12 4-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8-8-8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
