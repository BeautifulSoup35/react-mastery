import { useState } from "react";
import EditModal from "./EditModal";

function UserListTable({user, setUser}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editModal, setEditModal] = useState(<></>);

    const thAndTdStyle = (width = '70px') => ({
        padding: '0px 10px',
        width, //=>width: width
        height: "30px",
        border: "1px solid #dbdbdb",
    })
    const handleEditOnClick = (e) => {
        setEditModal(<EditModal isOpen={true} onClose={handleModalOnClose} user={user} setUser={setUser} editUserId={parseInt(e.target.value)} />);
        setModalOpen(true);
    }
    const handleDeleteOnClick = (e) => {
        const userId = parseInt(e.target.value);//속성으로 들어오는건 무조건 문자열이다
        setUser(user.filter(u => u.id !== userId));

    }

    const handleModalOnClose = () => {
        setEditModal(<></>);
        setModalOpen(false);
    }

    return <>
        <table style={{ boxSizing: 'border-box', border: '1px soild #dbdbdb', borderCollapse: 'collapse' }}>
            <thead >
                <tr>
                    <th style={thAndTdStyle()}>ID</th>
                    <th style={thAndTdStyle("140px")}>USERNAME</th>
                    <th style={thAndTdStyle("240px")}>E-MAIL</th>
                    <th style={thAndTdStyle()}></th>
                    <th style={thAndTdStyle()}></th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map(u => (
                        <tr key={u.id}>
                            <td style={thAndTdStyle()}>{u.id}</td>
                            <td style={thAndTdStyle()}>{u.username}</td>
                            <td style={thAndTdStyle()}>{u.email}</td>
                            <td style={thAndTdStyle()}><button value={u.id} onClick={handleEditOnClick}>수정</button></td>
                            <td style={thAndTdStyle()}><button value={u.id} onClick={handleDeleteOnClick}>삭제</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {modalOpen && editModal}
    </>

}
export default UserListTable; //중괄호로 안감싸고 import한다