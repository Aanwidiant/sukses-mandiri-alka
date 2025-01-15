import * as React from "react";
import { SVGProps } from "react";
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 175 120" {...props}>
    <path fill="#F5F0CD" d="M100 78V65h13v13zM100 98V85h13v13zM80 98V85h13v13zM80 78V65h13v13z" />
    <path fill="#fff" d="M26 58 81 3l7.036 7.036-55 55zM45 65l65-65 7.036 7.036-65 65z" />
    <path fill="#fff" d="M110.036.036 175 65l-7.035 7.035L103 7.072zM26 120.021v-62h10v62zM45 120V65h10v55z" />
    <path fill="#fff" d="M165 120V65h10v55zM126 120.021v-62h10v62zM45 120v-10h70v10zM0 110.021h36v10H0z" />
    <path fill="#fff" d="M81.046 3.046 136 58l-7.036 7.036L74.01 10.082z" />
  </svg>
);
export default Logo;
