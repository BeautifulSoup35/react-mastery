import { useState, useEffect } from "react";
import { REGEX } from "../constants/regx";

export function useInput({initValue}) {
    const [inputValues, setInputValues] = useState(initValue);// id가 일치하는 user가 통으로 전달해져옴 (객체)

    const [isValid, setValid] = useState(false);

    useEffect(() => {
        const entries = Object.entries(inputValues)
        const validList = entries.filter(([key, value]) => {
            const regex = REGEX[key];
            if (!regex) return true;
            return regex.test(value);//
        })//0 = key 1 = value

        console.log(validList);
        setValid(validList.length === entries.length)

    }, [inputValues])

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        })
    }
    //외부로 빼준다
    return {
        inputValues,
        setInputValues,
        isValid,
        handleInputOnChange
    }

}