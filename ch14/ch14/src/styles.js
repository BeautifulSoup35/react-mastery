import { css } from "@emotion/react";

export const box3 = (isShow) => css`
      width: 100px;
      height: 100px;
      background-color: green;
      opacity: ${isShow ? 1 : 0};
    `;
export const box4 = css`//export 외부에서 import해서 쓴다
    width: 200px;
    height: 200px;
    background-color: red;
`
 export const box5 = css`
     width: 100px;
      height: 100px;
      background-color: pink;`