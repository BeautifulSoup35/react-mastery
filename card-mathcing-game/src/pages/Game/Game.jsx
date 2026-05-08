import { useParams } from "react-router-dom";
import { GiCardRandom } from "react-icons/gi";
import * as s from "./styles"
import GameCard from "../../components/GameCard/GameCard";

function Game() {
    const params = useParams();
    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom/>CARD MATHING GAME<GiCardRandom/></h1>
                <h3>플레이어: {params.username}</h3>
            </header>
            <main>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </main>
        </div>
    </>
}
export default Game;