import { useEffect, useState } from 'react'

function App() {
	const [state1, setState1] = useState(10);
	const [state2, setState2] = useState(20);
	const [state3, setState3] = useState(0);
	const [clicked, setClicked] = useState(false);
	const [isFetched, setFetched] = useState(false);

	const handleOnClick = () => {
		setState1( state1 * 10 ); //100
		setFetched(true);
		setClicked(true);
	}

	 useEffect(()=> {
		if(clicked){
			setState2( state1 + state2 );
		}
		
		console.log("set2")
	 }, [state1]);

	 useEffect(() => {
		if(clicked){
			setState3( state1 + state2 );
		}
		setFetched(false);
	 }, [state2]);

	return (
		<>
			<button onClick={handleOnClick}>실행</button>
			{
				isFetched && <h1>패치중 ....⚠️</h1> || <>
					<h1>{state1}</h1>
					<h1>{state2}</h1>
					<h1>{state3}</h1>
				</>
			}
		</>
	)
}

export default App
