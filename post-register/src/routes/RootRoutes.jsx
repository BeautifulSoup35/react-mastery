import { Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import AuthRoutes from "./AuthRoutes";
import useAuthentication from "../hooks/queries/useAuthentication";

function RootRoutes() {

    const authenticationQuery = useAuthentication(localStorage.getItem("accessToken"));

    console.log(authenticationQuery.isLoading);
    console.log(authenticationQuery.data);
    return (
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="*" element={<>페이지를 찾을 수 없습니다.</>} />
        </Routes>
    )
}

export default RootRoutes;