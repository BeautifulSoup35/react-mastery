import { Route, Routes } from "react-router";

import Login from '../pages/Login/Login'
import Join from '../pages/Join/Join'
function AuthRoutes() {

    return (
        <>
            <Routes>
				<Route path='/login' element={<Login />}/>
				<Route path='/join' element={<Join />}/>
				<Route path="*" element={<>404</>} />
				
            </Routes>
        </>
    )
}

export default AuthRoutes;