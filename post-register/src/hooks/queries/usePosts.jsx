import { useQuery } from "@tanstack/react-query";

const requestPosts = async (page, size) => {//페이지를 renewer할떄 확장성 고려
        const postsJson = localStorage.getItem("posts");
        const posts = !!postsJson ? JSON.parse(postsJson) : []; //문자열인 json을 객체로
        const startIndex = (page - 1) * size;
        const endIndex = startIndex + size;
        const filteredPosts = posts.slice(startIndex, endIndex);//검색에 있는
        console.log(filteredPosts);

        return filteredPosts;
        
    }
    // requestPosts(2, 4);


export function usePosts (page, size) {

    return useQuery({
        queryKey: ["posts", page, size],
        queryFn: async () => {
            return await requestPosts(page, size);
        }
    });
}