import { useRef } from "react";
import { useInput } from "../hooks/inputs";

function UserRegister({ user, setUser }) {
    const initUser = {
        id: "",
        username: "",
        email: "",
    }

    const { inputValues, setInputValues, isValid, handleInputOnChange } = useInput({ initValue: initUser });
    const currentId = useRef(0);
    const handelRegisterOnClick = () => {
        currentId.current += 1;
        const newUser = {
            ...inputValues,
            id: currentId.current,
        }
        setUser([...user, newUser])
        setInputValues(initUser);
        console.log(user);
    }
    return <>
        <div>
            <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명' />
            <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일' />
            <button disabled={!isValid} onClick={handelRegisterOnClick}>등록</button>
        </div>
    </>
}

export default UserRegister;