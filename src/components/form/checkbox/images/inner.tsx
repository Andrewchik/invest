import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path stroke="#E6ECF1" d="M.5.5h21v21H.5z" />
  </svg>
);

export default SvgComponent;
