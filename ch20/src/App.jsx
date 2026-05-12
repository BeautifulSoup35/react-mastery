

function App() {
	new Promise((resolve, reject) => {// new Promis()하는건 동기이다.
		console.log(7);//객체 생성과 동시에 그 안의 함수 호출
		if(false){
			resolve("성공데이터");
		} 
		else {
			reject(new Error("실패데이터"));
		}
	}).then((reason) => {//나중에 큐에다 집어넣어라
		console.log(8);
		console.log(error);
	}).catch((value) => {//자기자신의 객체를 계속 리턴한다 빌더 패턴하고 비슷하다?
		console.log(9);
		console.log(value);
	});//생성을 할수잇다.


	new Promise((resolve, reject) => {// new Promis()하는건 동기이다.
		console.log(10);//객체 생성과 동시에 그 안의 함수 호출
		
		if(true) resolve();
		else reject();

		console.log(12);
	}).then(() => {//나중에 큐에다 집어넣어라
		console.log(11);
	}).catch(() => {//자기자신의 객체를 계속 리턴한다 빌더 패턴하고 비슷하다?
	});//생성을 할수잇다.
	
	console.log(1); //10ch
	console.log(2); //1시간
	console.log(3); //30분
	console.log(4); //1ㅊ초 동기식 == 1시간 30분 11초가 걸림

	setTimeout(() => {
		console.log(5);
	}, 5000)
	setTimeout(() => {
		console.log(6);
	}, 2000)

//resolve : 실행에 대해 성공 reject : 오류가 났다 오류에대한 철회
    return (
        <>
            홈
        </>
    )
}

export default App;