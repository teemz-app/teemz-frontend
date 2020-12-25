import './App.css';
// import Counter from './components/Counter';

const App = ({team_score, onIncrement, onDecrement}) => ( 
<>
    <h1>Set Score</h1>
    
    <p>{ team_score }</p>

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
