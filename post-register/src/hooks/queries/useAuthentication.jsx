import { useQueries, useQuery } from "@tanstack/react-query";

function requestAuthenticion(accessToken) {
    const secret = "abcd1234";//서버에다 적어두는 

    if (!accessToken) {//토큰이 없으면
        throw {//에러처리
            status: 403,
            data: "AccessToken이 유효하지 않습니다", //로그인된 적이 없다
        }
    }
    const accessTokenObj = JSON.parse(secret);
    if (secret !== accessTokenObj.secret) { // 이게 작동되면 안되는것 
        throw {
            status: 403,
            data: "AccessToken이 유효하지 않습니다",
        }
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const foundUser = users.find(user => user.id === accessTokenObj.userId); //로그인할때 그 아이디랑 배열안의 아이디가 같은 객체 찾기
    return {
        status: 200,
        data: foundUser,
    }
}

export function useAuthentication(accessToken) {

    return useQuery({//비동기 -> isloding을 true로 받아놓음
        queryKey: ["authentication", accessToken],//캐쉬키값 accesToken은 로그인할때마다 달라짐
        queryFn: async () => {//쿼리펀션이 리턴을 하면 
            try {//쿼리 function이란 무엇이냐
                return await requestAuthenticion(accessToken);//그 찾은 값이 여기로와서 리턴된다 로딩이 false로 변환 data출력

            } catch (error) {
                return error;
            }
        },
        staleTime: 1000 * 60 * 2,//2분이 지나면 이 캐쉬 데이터는 신선하지 않다
        gcTime:  1000 * 60 * 5,//가비지 컬렉터 5분이 지나면 이 캐쉬데이터는 쓰레기가된다 , 완전 사라진다
        //강제 로그아웃 됨
    });
}

export default useAuthentication;