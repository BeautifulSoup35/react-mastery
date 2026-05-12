import { Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from "react-router";
// const params = useParams();

    // console.log(params);

    // const {name2, age2} = params;
    // console.log(name);
    // console.log(age);

function Page1() {
    const {name, age} = useParams();
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/p3/data" ,{
            state: {
                username: "test",
                password: "1234",
            }
        });
    } 

    const backOnClick = () => {
        navigate(-1);//뒤로가기
    }
    return <>
        패이지1
        <div>{name}</div>
        <div>{age}</div>
        <button onClick={handleOnClick}>page3이동</button>
        <button onClick={backOnClick}>뒤로가기</button>
    </>
}
function Page2() {
    const [ searchParms, setSearchParms ] = useSearchParams();//get 요청할대 조회
    console.log(searchParms.get("name"));
    console.log(searchParms.get("age"));
    //하나의 키에 하나의 값
    console.log(searchParms.getAll("num"));
    //하나의 키에 여러개의 값이 있을때 배열로 가져온다
    
    const name = searchParms.get("name");
    const age = searchParms.get("age");
    const nums = searchParms.getAll("num");
    


    return <>
    패이지2
    <div>{name}</div>
    <div>{age}</div>
    {nums.map(n => <div>{n}</div>)}
    </>
}

function Page3() {
    const location = useLocation();
    console.log(location);
    const { pathname } = location
    console.log(pathname);

    const navigate3 = useNavigate();
    const onClick = () => {
        navigate3("p1/권민주/22");
    }
    // const history = use

    return <>
        패이지3
         <button onClick={onClick}>page1로 이동</button>
    </>
}
function App() {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/p1/:name/:age" element={<Page1 />}/>
                <Route path="/p2" element={<Page2 />}/>
                <Route path="/p3/data" element={<Page3 />}/>
            </Routes>
        </>
    )
}

export default App;