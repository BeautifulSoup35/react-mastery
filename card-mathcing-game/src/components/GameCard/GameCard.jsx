import * as s from "./style" 

function GameCard({card}) {
    const{id, content, isOpen} = card;

    return(

    <div css={s.scene}>
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