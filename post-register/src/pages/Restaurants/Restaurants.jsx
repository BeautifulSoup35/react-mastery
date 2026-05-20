import { useQuery } from '@tanstack/react-query';
import * as s from './styles';
import { useEffect, useState } from 'react';

function Restaurants() {
    
    // const restaurantQuery = useQuery({//사용자들 로딩 걸어주기 위해 사용
    //     queryKey: ["restaurants"],
    //     queryFn: async () => {
    //         const respons = await fetch("http://localhost:8080/api/restaurants", {
    //             method: "GET",
    //         })
    //         const jsonData = await respons.json();//json으로 변환을하는 비동기가 작동하며 리스트를 반환
    //         return jsonData;
    //     },
        

    // })
    const [refetch, setRefetch] = useState(true);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
       fetch("http://localhost:8080/api/restaurants")
        .then((response) => {
            console.log(response);
            response.json()
            .then(responseBody => {
                console.log(responseBody);
                setRestaurants(responseBody);
                setRefetch(false);
            });
        });
    }, [refetch]);
    

    // const restaurants = restaurantQuery.data;
    // const isLoding = restaurantQuery.isLoading;

    const emptyInputValues = {
        name: "",
        category: "",
        address: "",
        rating: "",//인풋은 무조건 string이다
    }
    const [inputvalues, setInputValues] = useState(emptyInputValues);

    const handleInputOnChange = (e) => {
        const { name, value } = e.target; 

    setInputValues(prev => ({
        ...prev,
        [name]: value // 이벤트 객체(e) 대신 안전한 일반 변수를 사용합니다.
    }));
    }

    const handleRegisterOnClick = () => {
        const requestBody = JSON.stringify(inputvalues);
        fetch("http://localhost:8080/api/restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBody,
        })
        .then((response) => {
            response.json()
            .then((responseBody) => {
                alert(responseBody.message);
                setRefetch(true);
            })
        });

    }

    return (
        <>
            <div css={s.table}>
                <div>
                    <input type="text" name='name' placeholder="가계명" value={inputvalues.name} onChange={handleInputOnChange}/>
                    <input type="text" name='category' placeholder="카테고리" value={inputvalues.category} onChange={handleInputOnChange}/>
                    <input type="text" name='address' placeholder="주소" value={inputvalues.address} onChange={handleInputOnChange}/>
                    <input type="text" name='rating' placeholder="평점" value={inputvalues.rating} onChange={handleInputOnChange}/>
                    <button onClick={handleRegisterOnClick}>등록</button>

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>이름</th>
                            <th>카테고리</th>
                            <th>주소</th>
                            <th>별점</th>
                            {/* <th>시간</th> */}
                            <th>최소주문건수</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                restaurants.map(restaurant => (
                                    <tr key={restaurant.id}>
                                        <td>{restaurant.id}</td>
                                        <td>{restaurant.name}</ td>
                                        <td>{restaurant.category}</ td>
                                        <td>{restaurant.address}</ td>
                                        <td>{restaurant.rating}</ td>
                                        {/* <td>{restaurant.created_at}</td> */}
                                        <td>{restaurant.min_order_amount == null ? 0 : 1}</ td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Restaurants;