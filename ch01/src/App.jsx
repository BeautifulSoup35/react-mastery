import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const [name, setName] = [10, () => {}]; //비구조 할당(구조분해)


    // const [count, setCount] = useState(0)
    // const numberState = useState(10);//let을 쓰지않는다
    // const number = numberState[0];
    // const setNumber = numberState[1];
    
    const [number, setNumber] = useState(10);
    
    const handleOnClick = () => {
        //setter의 존재 1번
        setNumber(number + 10);
    }
    return (
        <div>
            
            <h1>{number}</h1>
            <button onClick={handleOnClick}>증가</button>
        

        </div>
    )
}

export default App
