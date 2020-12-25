import Score from "./components/Score";

const App = ({ onIncrement, onDecrement}) => ( 
    <>
        <h1>Set Score</h1>
        
        <Score />

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
