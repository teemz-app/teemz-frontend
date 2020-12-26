import ScoreT1 from "./ScoreT1";
import ScoreButtonsT1 from "./ScoreButtonsT1";

import ScoreT2 from "./ScoreT2";
import ScoreButtonsT2 from "./ScoreButtonsT2";

const ScoreCard = () => ( 
    <>
        <h1>Set Score</h1>
        
        <ScoreT1 />
        <ScoreButtonsT1 />

        <ScoreT2 />
        <ScoreButtonsT2 />
    </>
);

export default ScoreCard;