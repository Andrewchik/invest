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
      d="M12 16.5c-.775 0-1.55-.254-2.21-.77L0 8.12V18.75A2.25 2.25 0 0 0 2.25 21h19.5A2.25 2.25 0 0 0 24 18.75V8.119l-9.787 7.617A3.61 3.61 0 0 1 12 16.5ZM.764 6.81l9.947 7.74c.758.59 1.822.59 2.58 0l9.947-7.74c.439-.374.762-.95.762-1.56A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25c0 .61.282 1.186.764 1.56Z"
    />
  </svg>
);
export default SvgComponent;
