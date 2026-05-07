import { useState } from 'react'

function App() {
	const [input, setInput] = useState({
		username: "",
		email: "",
		password: "",
		phone: "",
	});

	const handler = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}
	return (
		<>
			<div>
				<label htmlFor="username">사용자이름</label>
				<input type="text" id='username' name='username' value={input.name} onChange={handler} />
			</div>
			<div>
				<label htmlFor="email">이메일</label>
				<input type="email" id='email' name='email' value={input.email} onChange={handler} />
			</div>

			<div>
				<label htmlFor="password">비밀번호</label>
				<input type="password" id='password' name='password' value={input.password} onChange={handler} />
			</div>

			<div>
				<label htmlFor="phone">연락처</label>
				<input type="text" id='phone' name='phone' value={input.phone} onChange={handler} />
			</div>

			<button name='click' onClick={handler}>회원가입</button>
		</>
	)
}

function Service({ input }) {
	console.log(input);
}

export default App
