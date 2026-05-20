import { useQuery } from '@tanstack/react-query';
import * as s from './styles';
import { useEffect, useState } from 'react';

function Customers() {

    // const query = useQuery({
    //     queryKey: ["customers"],
    //     queryFn: async () => { //캐쉬가 없을때 작동
    //         const response = await fetch("http://localhost:8080/api/customers", {
    //             method: "GET",
    //         })
    //         const jsonData = await response.json();
    //         return jsonData; //value
    //     }

         
    // });
    // const customers = query.data;//캐쉬 데이터
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/customers", {
            method: "GET",
        })
        .then((response) => {
            response.json()
            .then((responseBody) => {
                setCustomers(responseBody);
            })
        })
    }, []);


    return (
        <>
            <div css={s.table}>
                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>폰번호</th>
                            <th>주소</th>
                            <th>이메일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer =>(
                                <tr>
                                    <td>{customer.name}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Customers;