import {useState} from 'react'
import UserRegister from './components/UserRegister';
import UserListTable from './components/UserListTable';


function App() {

	// const [ inputValues, setInputValues ] = useState();// id가 일치하는 user가 통으로 전달해져옴 (객체)
	const [user, setUser] = useState([]);

	return (
		<>
		<div>
			<UserRegister user={user} setUser={setUser} />
			<UserListTable user={user} setUser={setUser} />
			
			{/* 창에 띄울려면 여기서 상태를 전달 */}
		</div>
		</>
	)
}

export default App
