import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path fill="#D31627" d="M0 0h22v22H0z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m8.356 14.244-3.267-3.266L4 12.067l4.356 4.355 9.333-9.333L16.6 6l-8.244 8.244Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
