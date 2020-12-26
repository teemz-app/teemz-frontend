import PlayersCardT1 from './TeamCard/TeamComponents/PlayersCardT1';
import ScoreCard from './TeamCard/ScoringComponents/ScoreCardT1';
import initial from '../data/Initial';

let TeamCardT1 = () =>(
    <>
        <h2>{ initial.team_one_name }</h2>   
        <PlayersCardT1 />
        <ScoreCard />
    </>
)

export default TeamCardT1;