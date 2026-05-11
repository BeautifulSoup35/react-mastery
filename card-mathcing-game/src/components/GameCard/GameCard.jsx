import * as s from "./style" 

function GameCard({card, onClick}) {
    const{id, content, isOpen} = card;

    return(
// 함수 자체를 넘겨버린다
    <div css={s.scene} onClick={onClick}>
        <div css={s.layout(isOpen)}>
            <div css={s.front}>
                {content}
            </div>
            <div css={s.back}>
                <div css={s.container}>
                </div>
            </div>
        </div>
    </div>


    )
}

export default GameCard;