import { useState } from 'react'

function App() {
  // const [text, setText] = useState("");
  const [text, setText] = useState({
    contents1: '',
    contents2: '',
  });
  const [text1, setText1] = useState("");
  
  const {cont1, cont2} = text;


  const hOnChange = (e) => {
    setText1(e.target.value);
  }
  function onclick(){
    setText({
        contents1 : cont1,
        contents2 : cont2,
      })
    }
    return (
      <>
        <input type="text" onChange={hOnChange}/>
        <input type="text" onChange={hOnChange}/>
        <button onClick={onclick}>출력</button>
        <h1>내용: {text.contents1}</h1>
        <h1>내용2: {text.contents2}</h1>
      </>
    )
  
}

export default App
