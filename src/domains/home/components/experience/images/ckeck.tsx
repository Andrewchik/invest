import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#D31627" d="M0 0h24v24H0z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8.978 15.422 5.244 11.69 4 12.933l4.978 4.978L19.644 7.244 18.4 6l-9.422 9.422Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
