import { Route, Routes, useLocation, useNavigate } from "react-router";
import Layout from "../components/Layout/Layout";
import AuthRoutes from "./AuthRoutes";
import useAuthentication from "../hooks/queries/useAuthentication";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { use, useEffect } from "react";
import PostList from "../pages/PostList/PostList";
import PostRegister from "../pages/PostRegister/PostRegister";
import Menus from "../pages/Menus/Menus";

function RootRoutes() {
    const {pathname} =useLocation();

    const navigate = useNavigate();
    const authenticationQuery = useAuthentication(localStorage.getItem("accessToken"));//모든 페이지에 작동된다 

        useEffect(()=> {
            if(!authenticationQuery.isLoading) {
                const status = authenticationQuery.data.status;//쿼리함수가 리턴되서 들어온 곳
                if (status !== 200 && !pathname.startsWith("/auth/")) {//~시작한다
                    navigate("/auth/signin", {
                        replace: true,
                    });//{옵션} : 뒤로가기를 없게 하겠다.
                }
                if (status === 200 && pathname.startsWith("/auth/")) {
                     navigate("/", {
                        replace: true,
                    });
                }

            }
        },[authenticationQuery.isLoading]);

    // const queryClient = useQueryClient();
    // console.log(queryClient.getQueryCache());
    
    
    return (
        // {(authenticationQuery.isLoading) ? <h1>로딩중</h1> : 
        <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/auth/menus/" element={<Menus />} />
            <Route path="/write/" element={<PostRegister />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="*" element={<>페이지를 찾을 수 없습니다.</>} />
        </Routes>
// }
    )
}

export default RootRoutes;