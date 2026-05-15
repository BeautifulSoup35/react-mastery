import { Link, replace, useLocation, useNavigate } from 'react-router';
import * as s from './styles';
import { LuPencil } from 'react-icons/lu';
import Button from '../Button/Button';
import { BiPlus } from 'react-icons/bi';
import { useState } from 'react';

function Header() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);


    const handleWriteOnClick = () => {
        navigate("/write");
        console.log("글쓰기");
    }
    const handleProfileOnClick = () => {
        setShow(prev => !prev);
    } 
    const handleLogoutOnClick = () => {
        localStorage.removeItem("accessToken");
        navigate("/auth/signin", {
            replace: true,
        })
    }

    return (
        <header css={s.layout}>
            <div css={s.left}>
                <Link to={"/"}>
                    <h1><LuPencil /> PostLab</h1>
                </Link>
            </div>
            <div css={s.right}>
                {
                    !pathname.startsWith("/write") &&
                    <Button onClick={handleWriteOnClick}><BiPlus />글쓰기</Button>
                }
                <div css={s.profile} onClick={handleProfileOnClick}>
                    <span>권민주</span>
                    {/* 조건으로 건들기 => 트렌지션 안먹음 */}
                    <ul css={s.profileMenu(show)}>
                        <li>프로필 설정</li>
                        <li onClick={handleLogoutOnClick}>로그아웃</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;