import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M25 5.166c-10.954 0-19.834 8.88-19.834 19.833 0 10.954 8.88 19.834 19.833 19.834 10.954 0 19.834-8.88 19.834-19.834 0-10.953-8.88-19.833-19.834-19.833ZM3.165 24.999c0-12.058 9.775-21.833 21.833-21.833 12.059 0 21.834 9.775 21.834 21.833 0 12.059-9.775 21.834-21.834 21.834-12.058 0-21.833-9.775-21.833-21.834Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M15.298 20.312a.987.987 0 0 1 1.44 0L24.5 28.43l7.762-8.118a.987.987 0 0 1 1.44 0 1.1 1.1 0 0 1 0 1.505l-8.482 8.871a.987.987 0 0 1-1.44 0l-8.482-8.87a1.1 1.1 0 0 1 0-1.506Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
