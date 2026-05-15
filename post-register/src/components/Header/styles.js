import { css } from "@emotion/react";
import { CiCompass1 } from "react-icons/ci";

export const layout = css`

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 20px 15px;
`

export const left = css`
    & > a {
        text-decoration: none;
        color: #000000;

        & > h1 {
            display: flex;
            align-items: center;
            gap: 7px;
            margin: 0;
            font-size: 20px;
            
            & svg {
                color: #1D9E75;
            }
        }
    }
`

export const right = css`
    display: flex;
    align-items: center;
    gap: 10px;




`

export const profile = css`
    position: relative;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: #1D9E752b;
    font-size: 10px;
    color: #1D9E75;
    
    cursor: pointer;
`

export const profileMenu = (isShow) => css`
    transition: all 0.3s ease-in-out;//객체가 무조건 존재해야 먹힌다.
    
    list-style-type: none;
    position: absolute;
    top: 100%;
    right: 0%;//프로필 기준으로 만들어짐
    z-index: ${isShow ? 10 : -10};
    box-sizing: border-box;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    padding: 0;

    background-color: #ffffff;
    overflow: hidden;

    opacity: ${isShow ? 1: 0};

    & > li {
        font-size: 16px;
        box-sizing: border-box;
        padding: 10px 15px;
        width: 150px;

        &:not(:nth-last-of-type(1)) {//자기자신이 마지막 순서가 아니여야한다
            border-bottom: 1px solid #dbdbdb;


        }

        &:hover {
            background-color: #f2f1e3 ;
        }
        &:active {
            background-color: #e9e8da ;
        }
        
    }
`

