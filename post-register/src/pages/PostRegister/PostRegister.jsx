import * as s from './styles';
import Header from '../../components/Header/Header';
import { use, useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import TextInput from '../../components/TextInput/TextInput';
import { BiImageAdd } from 'react-icons/bi';
import Button from '../../components/Button/Button';
import Select from 'react-select';
import { BsAirplane } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { PiPaperPlane, PiPaperPlaneTiltLight } from 'react-icons/pi';
import useAuthentication from '../../hooks/queries/useAuthentication';
import { Navigate, replace, useNavigate } from 'react-router';

function PostRegister() {
    const autentication = useAuthentication(localStorage.getItem("accecssToken"))
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const[value, setValue] = useState("");
    const [interval, setInterval] = useState(null);
    const [thumbnail, setThumbnail] = useState({
        file: null,
        dataUrl: null, 
    });
    const [categoty, setCategory] = useState('common');

    const options = [
    { value: 'common', label: '일반게시글' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Frontned', label: 'Frontned' },
    { value: 'DataBase', label: 'DataBase' },
    ]


    const handleTitleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const handleCategoryOnChange = (option) => {
        setCategory(option.value);
    }
    const handleTempSave = () => {
        const tempPost = {
            "title": title,
            "content": value,
            "thumbnail": thumbnail,
            "categoty": categoty,
        }
        alert("게시글이 임시저장되었습니다.");
    }
    useEffect(() => {
        const tempPostJson = localStorage.getItem("tempPost");
        if (!!tempPostJson) {
            const tempPost = JSON.parse(tempPostJson);
            setValue(tempPost.content);
            setTitle(tempPost.title);
            setThumbnail(tempPost.thumbnail);
            setCategory(tempPost.categoty);
        }
    }, []);
    useEffect(() => {
        const itv = setInterval(() => {
        const tempPost = {
            "title": title,
            "content": value,
            "thumbnail": thumbnail,
            "categoty": categoty,
        }
        localStorage.setItem("tempPost", JSON.stringify(tempPost));    
        },5000);
        setInterval(itv);
        return () => {
            clearInterval(interval);
        }
    })

    const handleSubmitOnClick = () => {
        let posts = JSON.parse(localStorage.getItem("posts"));
        posts = posts ?? [];
        const ids = posts.map(post => post.id);
        const newId = Math.max(...ids, 0) + 1;
        const newPost = {
            "id": newId,
            "title": title,
            "content": value,
            "thumbnail": thumbnail,
            "categoty": categoty,
            "postingDate": new Date(),//현재날짜
            "user" : autentication.data.data,
        }
        posts = [...posts, newPost];
        console.log(posts);
        localStorage.setItem("posts", JSON.stringify(posts));
        alert("발행이 완료되었습니다.");
        clearInterval(interval);
        localStorage.removeItem("tempPost");
        navigate("/", {
            replace: true,
        })
    }

    const handleThumbnamilOnClick = () => {
        const input = document.createElement("input")//가상으로 엘리먼트 인풋 태그 생성 
        input.setAttribute("type", "file");//속성을 파일로 잡는다
        input.setAttribute("accept", "image/*")
        input.onchange = (e) => {
            //이벤트 콜백
            console.log(e.target.files); //파일객체는 이걸 꺼낼수있음
            const files = Array.from(e.target.files);//일반배열로 바꿔주는게 편함
            readFileDataUrl(files[0]).then((dataUrl)=>{
                setThumbnail(prev => ({
                    ...prev,
                    file: files[0],
                    dataUrl: dataUrl,


                }))
            });

        }
        input.click();
    };
    const readFileDataUrl =  (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader;
            fileReader.onload = (e) => {//로드된 결과가 나온다
                resolve(e.target.result);
            }
            fileReader.readAsDataURL(file);
        });
    }


    return (
        
        <div css={s.wrap}>
            <Header />
            <div css={s.layout}>
                <main css={s.main}>
                    <div css={s.titleInput}>
                        <TextInput placeholder={"작성하실 글의 제목을 입력해주세요"} value={title} onChange={handleTitleOnChange}/>
                    </div>
                   
                     <MDEditor
                        value={value}
                        onChange={setValue}
                        data-color-mode='light'
                        height={"500px"}
                        css={s.editor}
                        />
                
                </main>
                <aside css={s.sidebar}>
                    <div css={thumbnail?.dataUrl ? s.thumbnail(thumbnail.dataUrl) : s.thumbnail('')}>
                        <label>썸네일</label>
                        <div onClick={handleThumbnamilOnClick}>
                            {
                                !thumbnail?.dataUrl && 
                                <>  
                                    <BiImageAdd />
                                    <p>이미지 업로드</p>
                                </>
                            }
                            
                        </div>
                            <Button onClick={() => {setThumbnail({file: null, dataUrl: null})}}>썸네일 삭제</Button>
                    </div>
                    <div css={s.categories}>
                        <label>카테고리</label>
                        <Select options={options} defaultValue={options[0]} value={options.find(option => option.value === categoty)} onChange={handleCategoryOnChange}/>
                    </div>
                    <div css={s.submitButtonGroup}>
                        <Button onClick={handleTempSave}>임시저장</Button>
                        <Button onClick={handleSubmitOnClick}><PiPaperPlaneTiltLight />발행하기</Button>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default PostRegister;