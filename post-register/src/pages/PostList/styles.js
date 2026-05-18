import { css } from "@emotion/react";

export const topPosting = css`
    width: 100%;
    height: 200px;

    background-color: #11112a;
`;

export const searchContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    gap: 5px;

    box-sizing: border-box;
    padding: 10px 20px;


    & input {
        margin: 0 !important;
    }
`;

export const postListContainer = css`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    list-style-type: none;
    margin: 0;
    box-sizing: border-box;
    border: 2px solid #dbdbdb;
    border-width: 1px 0;//좌우만 제거
    padding: 20px;
    width: 100%;
    height: 300px;
    background-color: #f3f2ec;
    /* overflow: scroll; */
`;

export const card = css`
    transition: all 0.1s ease-in-out;
    /* flex-grow: 1; */
    flex: 0 0 300px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 300px;
    height: 120px;
    background-color: #ffffff;
    overflow: hidden;
    cursor: pointer;

    & > div, &> footer {
        padding: 19px;

    }
    &:hover {
        box-shadow: 0 0 10px 10px #00000033;
    }
    &:active {
        transform: scale(96%);
    }
`;

export const cardThumnail = (url) => css`
width: 100%;
height: 100px;
    background-image: url("${url}");
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain ;
    background-color: #fafafa;

`

export const pagination = css`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 5px;
    box-sizing: border-box;
    padding: 20px;
`