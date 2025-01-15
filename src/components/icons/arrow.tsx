import * as React from "react";
import { SVGProps } from "react";
const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 21" {...props}>
    <path d="M10.06.94a1.502 1.502 0 0 0-2.124 0l-7.5 7.5a1.502 1.502 0 0 0 2.123 2.124L7.5 5.619V20c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V5.623l4.94 4.936a1.502 1.502 0 0 0 2.124-2.123l-7.5-7.5-.005.005Z" />
  </svg>
);
export default Arrow;
