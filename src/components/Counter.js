const Counter = ({ team_score, onIncrement }) => ( 
    <>
        <h1>Set Score</h1>
        
        <p className="card card-body">{ team_score }</p>

        <div>
            <button
                className="btn btn-primary"
                onClick= { onIncrement }
                >
                    +
                </button>
                
            <button className="btn btn-primary">-</button>
            <button className="btn btn-danger">Reset</button>
        </div>
    </>
);

export default Counter;