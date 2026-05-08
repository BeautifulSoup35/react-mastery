import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    & > header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        & > h1 {
            font-size: 50px;
            color: transparent;
            -webkit-text-fill-color: transparent;
            
            background: linear-gradient(90deg,rgba(115, 10, 36, 1) 0%, rgba(131, 166, 109, 1) 100%);;
            background-clip: text;
            -webkit-background-clip: text;
            cursor: default;
        }
    }

    & > main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;

        box-sizing: border-box;
        border-radius: 8px;
        width: 600px;
        height: 250px;
    }

`

export const username = css`
    & > input {
        box-sizing: border-box;
        border: none;
        border-radius: 40px;
        outline: none;
        width: 340px;
        height: 30px;
        padding: 0 10px;
        text-align: center;
        font-size: 24px;
        color: #fafafa;
        background-color: #272727;
        box-shadow: 0 0 10px #5c5c5c inset;
        cursor: pointer;

        &:hover , &:focus{
            box-shadow: 0 0 10px #9c9c9c inset;
        }
        &::placeholder {
            color: #c3c3c3;
        }
    }
`
export const startButton = css`
    & > button {
        width: 340px;
        height: 30px;
        font-size: 20px;
        font-weight: 600;
        text-shadow: 0 0 5px #fafafa44;
        color: #c5c5c5;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            text-shadow: 0 0 10px #fafafa44;

        }
        
        &:active {
            text-shadow: 0 0 10px #a52121;

        }

    }
`