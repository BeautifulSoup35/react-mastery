import { Link, Outlet, Route, Routes } from "react-router";
function MainLayout() {
	return (
		<>
			<header>
				<Link to={"/"}>홈</Link>
				<Link to={"/about"}>소개</Link>
				<Link to={"/product"}>상품정보</Link>
				<Link to={"/mypage"}>마이페이지</Link>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<h3>
					회사정보
				</h3>
			</footer>
		</>
	)
}

function App() {
    return (
        <>
            <Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="" element={<>홈화면</>} />
					<Route path="about" element={<>소개화면</>} />
					<Route path="product" element={<>상품 정보 화면</>} />
					<Route path="mypage" element={<>마이페이지</>} />
				</Route>
            </Routes>
        </>
    )
}

export default App;