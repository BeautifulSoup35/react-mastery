import { useEffect, useState } from 'react'

function App() {
  const [currentId, setCurrentId] = useState(0);
  const [inputValue, setInputValue ] = useState("");
  const [data, setData] = useState([]);
  

  
  const handleAddOnClick = () => {
    setCurrentId(currentId + 1);
    
  }
  
  useEffect(() => {
    console.log("유즈이펙트 호출");
    if (currentId !== 0) setData([...data, {id: currentId, num: inputValue}]);
    
  }, [currentId]);

  console.log(currentId);
  console.log(data);
  
  return (

    <>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <button onClick={handleAddOnClick}>숫자추가</button>
    <ul>
      {data.map((d, index )=> <li key={d.id}>{d.num}</li>)}
    </ul>
    
    </>
  )
}

export default App
