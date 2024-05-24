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
      d="m21 8.59-.796-.795-.003.003-.792-.792-7.406 7.406L4.591 7 3 8.592l.002.002-.001.001 8.128 8.129-.005.005.864.863.005-.005.005.005.385-.384.003.004L21 8.598l-.004-.004L21 8.59Z"
    />
  </svg>
);
export default SvgComponent;
