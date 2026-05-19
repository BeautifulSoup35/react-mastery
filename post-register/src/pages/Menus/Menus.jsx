import { useQueries, useQuery } from '@tanstack/react-query';
import * as s from './styles';

function Menus() {
    const menusQuery = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            const url = "http://localhost:8080/api/db/none/util";
            const respons = await fetch(url, {
                method: "GET",
            });
            const jsonData = await respons.json();
            return jsonData;
        }
    });

    const menus = menusQuery.data;
    const isLoding = menusQuery.isLoading;

    console.log(isLoding);
    console.log(menus);
    
    return (
        <div css={s.table}>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>가게ID</th>
                        <th>메뉴명</th>
                        <th>가격</th>
                        <th>설명</th>
                        <th>판매여부</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        !isLoding && menus.map(menu => (
                            <tr>
                                <td>{menu.id}</td>
                                <td>{menu.restaurantId}</td>
                                <td>{menu.menuName}</td>
                                <td>{menu.price}</td>
                                <td>{menu.description}</td>
                                <td>{!menu.isAvailable ? "O" : "X"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        
    )
}

export default Menus;