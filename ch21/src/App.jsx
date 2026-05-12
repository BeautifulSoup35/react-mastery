
function App() {
	const getPromise = (name) => {
		return new Promise((resolve, reject) => {
			console.log("프로미스 생성");
			console.log(name);
			if (!!name) {
				resolve(name + "님");
			}else {
				reject(new Error("이름이 입력되지 않았습니다"));
			}
			
		})
	}
	
	const getPromise2 = async (name) => {//async를 다는 순간 promise
		console.log("프로미스 생성");
		console.log(name);
		if (!!name) {
			return name + "님";//resolve
		}else {//thow면 catch
			throw new Error("이름이 입력되지 않았습니다");
		}
		
		
	}

	const handle1 = () => {
		const promise1 =getPromise("권민");
		promise1
		.then((name)=> {console.log(name + " 환영합니다")})
		.catch((error)=>{console.log(error)});
	}
	const handle2 = () => {
		const promise2 =getPromise2("민주");
		promise2
		.then((name)=> {console.log(name + " 수고하셨습니다.")})
		.catch((error)=>{console.log(error)});

	}

    return (
        <>
            <button onClick={handle1}>프로미스 생성1</button>
            <button onClick={handle2}>프로미스 생성2</button>
        </>
    )
}

export default App;



