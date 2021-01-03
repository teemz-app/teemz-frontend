import RowPlayer from '../RowPlayer';

// Show all the players of one of the generated teams, by using the RowPlayer component

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