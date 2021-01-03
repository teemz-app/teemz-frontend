import ScoreT1 from "../ScoringComponents/ScoreT1";
import ScoreButtonsT1 from "../ScoringComponents/ScoreButtonsT1";

// This component is the parent component of scoore and score buttons for one of the teams

const ScoreCardT1 = () => ( 
    <>
        <h3 className="teamCard_setScore">Set Score</h3>   
        <ScoreT1 />
        <ScoreButtonsT1 />
    </>
);

export default ScoreCardT1;