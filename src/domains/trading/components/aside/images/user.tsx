import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      fill="#161C2D"
      fillRule="evenodd"
      d="M12 2.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5ZM6.25 7a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM2.66 22c0-4.42 4.337-7.75 9.34-7.75s9.34 3.33 9.34 7.75a.75.75 0 1 1-1.5 0c0-3.32-3.363-6.25-7.84-6.25S4.16 18.68 4.16 22a.75.75 0 0 1-1.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
