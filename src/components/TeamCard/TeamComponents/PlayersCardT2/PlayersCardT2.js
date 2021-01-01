import RowPlayer from '../RowPlayer';

const PlayersCardT2 = ({ team_two_players }) => {
    
    return (
        <ul>
        {
            team_two_players.map(player => (
                <RowPlayer name = { player.name } key = { player.id } />
            ))
        }
        </ul>
    )

}

export default PlayersCardT2;