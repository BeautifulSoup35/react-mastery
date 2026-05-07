import { useEffect, useState } from 'react'

function Box1() {

	useEffect(() => {
		console.log("box1 컴포넌트 장착");
		return () => {
		console.log("box1 컴포넌트 해제");
		}
	});
	
	console.log("box1 컴포넌트 호출")
	return <div>
		<h2>Box1</h2>
	</div>
}




function App() {

	const [show, setShow] = useState(false);

	const handleShowOnClick = () => {
		setShow(!show);//반전 되도록 넣어주기
	}

	useEffect(() => {
		console.log("app 컴포넌트 장착");
	});
	
	console.log("App 컴포넌트 호출");
	return (
		<>
			<h1>app 컴포넌트</h1>
			<button onClick={handleShowOnClick}>{show ? "숨기기" : "보이기"}</button>
			{show && <Box1/>}
		</>
	)
}

export default App
