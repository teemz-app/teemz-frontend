import PlayersCardT2 from './TeamCard/TeamComponents/PlayersCardT2';
import ScoreCard from './TeamCard/ScoringComponents/ScoreCardT2';
import initial from '../data/Initial';

let TeamCardT1 = () => (
    <>
        <h2>{ initial.team_two_name }</h2>   
        <PlayersCardT2 />
        <ScoreCard />
    </>
)

export default TeamCardT1;