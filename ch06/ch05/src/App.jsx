import { useState } from 'react'

function App() {
	const [ currentPage, setCurrentPage ] = useState(<></>);//왜 page가<><>여애됐더라
	
	
	const [ pages, setPages ] = useState({
		
		number: <Number />,
		table: <Table/>,
		table2: <Table2 />
		
	});
	
	const handlePageButtonOnClick = (e) => {
		setCurrentPage(pages[e.target.value]);
	}
	
	return (
		<>
			<header>
				<button value={"number"} onClick={handlePageButtonOnClick}>Number</button>
				<button value={"table"} onClick={handlePageButtonOnClick}>Table</button>
				<button value={"table2"} onClick={handlePageButtonOnClick }>Table2</button>

				
			</header>
			<main>
				{currentPage}
			</main>
		</>
	)
}

function Number() {
	const numbers = [1, 2, 3, 4,5, 6, 7, 8, 9];
	const h1Numbers = numbers.map(n => <h1>{n}</h1>);
	return (
		<>
			{h1Numbers}
			{numbers.map(n=> <h1>{n}</h1>)}
		</>
	)
}

function Table() {
	const students = [
		{no: 1, name: "권민주", age:22},
		{no: 2, name: "권주", age:23},
		{no: 3, name: "권민", age:24},
		{no: 4, name: "민주", age:25},
		{no: 5, name: "권당긴주", age:26},
	];
	return(
		<table>
			<thead>
				<tr>
					<th>No.</th>
					<th>Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{
					
					students.map(s=>
						<tr>
						<td>{s.no}</td>
						<td>{s.name}</td>
						<td>{s.age}</td>
						</tr>
					)
				}
			</tbody>
		</table>
	)
}
function Table2() {
	const [stu, setStu] = useState([]);
	const [input , setInput] = useState({
		no:"",
		name:"",
		age:""
	});
	const handlechange = (e) => {
		setInput ({
			...input,
			[e.target.name] : e.target.value 
		})
	}
	const onclick = () => {
		setStu([...stu, {no: input.no, name: input.name, age: input.age}])
	}
	return(
		<>
			<input type="text" name='no' onChange={handlechange}/>
			<input type="text" name="name" onChange={handlechange}/>
			<input type="text" name="age" onChange={handlechange}/>
			<button onClick={onclick} >추가</button>

			<table>
			<thead>
				<tr>
					<th>No.</th>
					<th>Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{
					stu.map(user => 
						<tr>
							<td>{user.no}</td>
							<td>{user.name}</td>
							<td>{user.age}</td>
						</tr>
				)	
				}
			</tbody>
		</table>
		</>
	)
}

export default App
