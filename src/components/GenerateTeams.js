import { useSelector, useDispatch } from "react-redux";


const listPlayers = (players) => {
    return players.map(player => {
        return (<p key={player.id}>{player.name}</p>);
    })
}

const GenerateTeams = () => {
    const players = useSelector(state => state.players);

    const dispatch = useDispatch();

    const getAllPlayers = () => dispatch({
        type: "GET_PLAYERS"
    });

        return (
            <>
                <button
                    className="doButton"
                    onClick= { getAllPlayers }
                >
                    Generate Teams
                </button>
                { listPlayers(players) }
        </>
        )
    }

export default GenerateTeams;




