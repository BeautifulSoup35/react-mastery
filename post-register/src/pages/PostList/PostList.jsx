import { HiArrowLeft } from 'react-icons/hi';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import TextInput from '../../components/TextInput/TextInput';
import * as s from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function PostList() {

    return (
        <div>
        
            <Header />
            <main>
                {/* 상단 배너 */}
                <article css={s.topPosting}>

                </article>
                {/* 검색하는부분 */}
                <div css={s.searchContainer}>
                    <TextInput />
                    <Button>검색</Button>
                </div>
                <ul css={s.postListContainer}>
                    <li css={s.card}>
                        <div></div>
                        <footer></footer>
                    </li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                </ul>
                {/* 페이지 화면하는 곳 */}
                <div css={s.pagination}>
                    <Button><FiChevronLeft/></Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button><FiChevronRight /></Button>
                </div>

            </main>
        </div>
    )
}

export default PostList;