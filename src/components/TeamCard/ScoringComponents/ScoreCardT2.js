import ScoreT2 from "./ScoreT2";
import ScoreButtonsT2 from "./ScoreButtonsT2";

// This component is the parent component of scoore and score buttons for one of the teams

const ScoreCardT2 = () => ( 
    <>
        <h3 className="teamCard_setScore">Set Score</h3>

        <ScoreT2 />
        <ScoreButtonsT2 />
    </>
);

export default ScoreCardT2;