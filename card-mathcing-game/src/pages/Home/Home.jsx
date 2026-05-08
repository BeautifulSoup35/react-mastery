import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./styles"
import { GiCardRandom } from "react-icons/gi";
import { useState } from "react";
import Swal from "sweetalert2";

function Home() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const handleInputOnChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleStartOnClick = (e) => {
        if (!inputValue.trim()) {//유효성 검사 추가
            setInputValue("");
            Swal.fire({ //프로미스로 업그래이드 가능
                title: "게임 시작 실패",
                text: "게임을 시작하려면 이름을 입력하세요",
                icon: "warning"
                });
            return;
        }
        navigate(`/game/${inputValue}`);

    }

    console.log("Hoem");
    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom css={s.svg}/>CARD MATHING GAME<GiCardRandom/></h1>
            </header>
            <main>
                <div css={s.username}>
                    <input type="text" placeholder="플레이어 이름" value={inputValue} onChange={handleInputOnChange}/>
                </div>
                <div css={s.startButton}>
                    <button onClick={handleStartOnClick}>시작하기</button>   
                </div>
            </main>
        </div>
    </>
}
export default Home;