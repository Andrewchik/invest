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
      fill="#161C2D"
      d="M12 0a8.81 8.81 0 0 0-8.8 8.8c0 8.29 7.961 14.754 8.3 15.025a.8.8 0 0 0 1 0c.339-.271 8.3-6.736 8.3-15.025A8.81 8.81 0 0 0 12 0Zm0 12a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z"
    />
  </svg>
);
export default SvgComponent;
