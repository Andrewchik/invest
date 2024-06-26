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
      d="M1.25 4.66a2.717 2.717 0 0 1 2.972-2.738c2.218.18 5.508 1.277 7.39 2.448l.253.152a.43.43 0 0 0 .27 0l.165-.107c1.882-1.184 5.187-2.292 7.406-2.482a.755.755 0 0 1 .064-.003h.03c1.61-.117 2.95 1.108 2.95 2.74v12.07c0 1.332-1.056 2.556-2.397 2.724h-.003l-.325.04c-2.086.278-5.35 1.356-7.188 2.37a1.724 1.724 0 0 1-.843.208c-.264 0-.564-.053-.831-.197l-.028-.014a.816.816 0 0 1-.025-.013c-1.84-1.006-5.101-2.077-7.18-2.355h-.002l-.286-.04c-1.339-.17-2.392-1.393-2.392-2.723V4.66Zm2.847-1.243c-.75-.063-1.347.489-1.347 1.243v12.08c0 .587.504 1.163 1.083 1.236h.01l.286.04h.002c2.257.303 5.685 1.427 7.687 2.519l.027.014.028.015.03.009a.413.413 0 0 0 .176 0l.02-.005.008-.005c2.002-1.105 5.451-2.244 7.724-2.547h.009l.327-.04h.001c.579-.074 1.082-.649 1.082-1.236V4.67c0-.757-.6-1.306-1.357-1.243a.752.752 0 0 1-.063.003h-.027c-1.98.177-5.029 1.202-6.7 2.252l-.177.115c-.292.181-.63.248-.926.248-.293 0-.63-.066-.92-.245l-.257-.154C9.143 4.6 6.08 3.578 4.1 3.417h-.002Z"
      clipRule="evenodd"
    />
    <path
      fill="#161C2D"
      fillRule="evenodd"
      d="M12 4.74a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75ZM4.75 8.49a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75ZM4.75 11.49a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
