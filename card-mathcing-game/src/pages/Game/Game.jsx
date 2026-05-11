import { useParams } from "react-router-dom";
import { GiCardRandom } from "react-icons/gi";
import * as s from "./styles"
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useState } from "react";

function Game() {
    const params = useParams();


    const [ cards, setCards ] = useState([]);
    
    useEffect(() => {  
        let randomNums = [];
        
        while(randomNums.length < 12) {
            const newNum = Math.floor((Math.random() * 10) + 1);
            if(randomNums.includes(newNum)) {
                continue;
            }
            randomNums = [...randomNums, newNum, newNum];
        }
        
        for ( let i =0; i < (randomNums.length); i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomNums[i], randomNums[j] ]= [randomNums[j], randomNums[i] ];
        }

        setCards(randomNums.map((num, index) => ({
            id: index + 1,
            content: num,
            isOpen: true,

        })));
}, []);


    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom/>CARD MATHING GAME<GiCardRandom/></h1>
                <h3>플레이어: {params.username}</h3>
            </header>
            <main>
                {
                    cards.map(card => <GameCard key={card.id} card={card}/>)
                }
            </main>
        </div>
    </>
}
export default Game;