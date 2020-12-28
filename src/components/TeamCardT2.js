import PlayersCardT2 from './TeamCard/TeamComponents/PlayersCardT2';
import ScoreCard from './TeamCard/ScoringComponents/ScoreCardT2';
import initial from '../data/Initial';

let TeamCardT1 = () => (
    <>
        <div className="teamCard_container">
            <h2 className="teamCard_teamName">{ initial.team_two_name }</h2>   
            <PlayersCardT2 />
            <ScoreCard />
        </div>
    </>
)

export default TeamCardT1;