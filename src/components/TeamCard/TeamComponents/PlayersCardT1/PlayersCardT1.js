import RowPlayer from '../RowPlayer';

let Players = ({players}) => {
    return (
        <ul>
        {
            players.map(player => (
                <RowPlayer name = { player } key = { player.id } />
            )
            )
        }
    </ul>
    )
}


export default Players;