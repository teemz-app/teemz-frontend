import ScoreCard from './TeamCard/ScoringComponents/ScoreCardT1';
import initial from '../data/Initial';
import PlayersCardT1 from './TeamCard/TeamComponents/PlayersCardT1';

let TeamCardT1 = () =>(
    <>
        <div className="teamCard_container">
            <h2 className="teamCard_teamName">{ initial.team_one_name }</h2>   
            <PlayersCardT1 />
            <ScoreCard />
        </div>
    </>
)

export default TeamCardT1;