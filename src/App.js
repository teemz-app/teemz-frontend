import Score from "./components/Score";

const App = ({team_score, onIncrement, onDecrement}) => ( 
    <>
        <h1>Set Score</h1>
        
        <Score team_score = { team_score } />

        <div>
            <button
                onClick= { onIncrement }
            >
                +
            </button>


            <button
                onClick= { onDecrement }
            >
                -
            </button>
        </div>
    </>
);

export default App;
