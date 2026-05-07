import { useInput } from "../hooks/inputs";
import Modal from "react-modal"

Modal.setAppElement("#root")//최상위 엘리먼츠 설정

function EditModal({isOpen, onClose, user, setUser, editUserId}) {
    
    // const [ inputValues, setInputValues ] = useState();// id가 일치하는 user가 통으로 전달해져옴 (객체)
    console.log(editUserId)
    const { inputValues, setInputValues ,isValid, handleInputOnChange } = useInput({initValue: user.find(u => u.id === editUserId)});
    const handleOkOnclic = () => {
        setUser(user.map(u => {
            if (u.id === editUserId) {
                return inputValues;
            }
            return u;
        }))

        onClose();
    }

    return(
    <Modal isOpen={isOpen} onRequestClose={onClose} style={ {
        overlay: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            backgroundColor: "#00000055"
        },
        content: {
            position: "static",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            gap: "10px",

            width: "300px",
            height: "200px",
        }
    }}>
        
    
        <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명'/>
        <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일'/>
        <div>
            <button disabled={!isValid} onClick={handleOkOnclic}>확인</button>
            <button  onClick={onClose}>닫기</button>
        </div>
    </Modal>
    )
    
}

export default EditModal;