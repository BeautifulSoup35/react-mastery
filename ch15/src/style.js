import { css } from "@emotion/react";

const hieght = "30px";
export const back = css`
    margin: 0;
    
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    box-shadow:2px 2px 2px 2px  #dbdbdb;
    padding: 15px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 120px;

`
export const card = css`
    box-sizing: border-box; //쓰는 이유 padding을 줄거라서
    padding: 10px;
/*     
    border: 1px solid #dbdbdb; */
    border-radius: 4px;
    width: 340px;
    box-shadow: 0 0 5px #00000444;
`

export const input = css`
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    padding-bottom: 10px ;
`
export const inputBox = css`
    &> input {
		box-sizing: border-box;
		border: 1px solid #dbdbdb;
		padding: 0 10px ;
		outline: none;
        width: 100%;
		height: 40px;
		cursor: pointer;

		&:hover {
			box-shadow: 0 0 3px #00000333;
		}
		&:active {
			box-shadow: 0 0 3px #00000333 inset;

		}
		&:focus {
			box-shadow: 0 0 3px #06065898 inset;

		}

	}
	
    margin-bottom: 10px;
`

export const eachInput = css`
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    height: ${hieght};
`
export const registButton = css`
    padding-bottom: 0px;
    background-color: #2042da;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    
    width: 100%;
    height: ${hieght};
    color: aliceblue;
	outline	:none ;
    &:hover {
        background-color: #1b39bb;
    }
    &:active {
		
        background-color: #1935ad;
    }
`

export const buttonBox = css`
	box-sizing: border-box;
	border: 1px solid #dbdbdb;
	border-radius: 5px;
	outline	:none ;
	height: 30px;
    width: 100%;
	background-color: #2042da;
	color: aliceblue;
	cursor: pointer;

    &:hover {
        background-color: #1b39bb;
    }
    &:active {
		
        background-color: #172e97;
    }
	&:disabled {
		background-color: #5e5e5e;
		cursor: not-allowed;

	}
`

