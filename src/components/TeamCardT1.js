import ScoreCard from './TeamCard/ScoringComponents/ScoreCardT1';
import initial from '../data/Initial';
import PlayersCardT1 from './TeamCard/TeamComponents/PlayersCardT1';

let TeamCardT1 = () =>(
    <>
        <h2>{ initial.team_one_name }</h2>   
        <PlayersCardT1 />
        <ScoreCard />
    </>
)

export default TeamCardT1;