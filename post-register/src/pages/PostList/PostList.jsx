import { HiArrowLeft } from 'react-icons/hi';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import TextInput from '../../components/TextInput/TextInput';
import * as s from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';
import { usePosts } from '../../hooks/queries/usePosts';

function PostList() {
    const [page, setPage] = useState(1);
    const posts = usePosts(page, 4);

    const handlePageOnClick = (e) => {
        setPage(parseInt(e.target.value));
    }
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
                    {
                        posts.isLoading ? <></> : posts.data.map(post => (
                            <li key={post.id} css={s.card}>
                                <header css={s.cardThumnail(post.thumbnail.dataUrl)}></header>
                                <div>{post.content}</div>
                                <footer>{post.user.fullName}</footer>
                            </li> 
                        ))

                    }
                   
                </ul>
                {/* 페이지 화면하는 곳 */}
                <div css={s.pagination}>
                    <Button><FiChevronLeft/></Button>
                    <Button value={1} onClick={handlePageOnClick}>1</Button>
                    <Button value={2} onClick={handlePageOnClick}>2</Button>
                    <Button value={3} onClick={handlePageOnClick}>3</Button>
                    <Button value={4} onClick={handlePageOnClick}>4</Button>
                    <Button value={5} onClick={handlePageOnClick}>5</Button>
                    <Button><FiChevronRight /></Button>
                </div>

            </main>
        </div>
    )
}

export default PostList;