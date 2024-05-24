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
      fillRule="evenodd"
      d="M12 2.75c-5.106 0-9.25 4.144-9.25 9.25s4.144 9.25 9.25 9.25 9.25-4.144 9.25-9.25S17.106 2.75 12 2.75ZM1.25 12C1.25 6.066 6.066 1.25 12 1.25S22.75 6.066 22.75 12 17.934 22.75 12 22.75 1.25 17.934 1.25 12Z"
      clipRule="evenodd"
    />
    <path
      fill="#161C2D"
      fillRule="evenodd"
      d="M11.629 6.76a.75.75 0 0 1 .75.75v4.1c0 .153.059.376.189.604.13.23.292.393.423.47l.002.002 3.1 1.85a.75.75 0 0 1-.768 1.288l-3.098-1.849h-.002c-.408-.243-.736-.624-.96-1.017-.225-.394-.386-.872-.386-1.348v-4.1a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
