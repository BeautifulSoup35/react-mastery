import { useState } from "react";
import App from "./App"



function Hello() {
    const text1 = "헬로";
    const [text, textSet] = useState("");
    // const [text, textSet] = ["",() =>{}];

    

    return (
        <div>
            <button onClick={() => {textSet(text1);}}>클릭</button>
            <h1>{text}</h1>
            
            
        </div>
    )
}
// export default Hello

export function Hi() {
        const [num ,setNum] = useState(0);

        // const [a, b ]= () => {
        //     let c;
        //     let d;
        //     return  c, d;
        // }
        
    return (
        
        <div>
            <button onClick={() => {setNum(num + 1);}}>1증가</button>
            <button onClick={() => {setNum(num - 1);}}>1감소</button>
            <h1>{num}</h1>
        </div>
        
    )
}
export function Bye() {
    return (
        <h1>안녕히가세요</h1>
    )
}
export default Hello
