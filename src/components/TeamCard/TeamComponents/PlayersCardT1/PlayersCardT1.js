import RowPlayer from '../RowPlayer';

const PlayersCardT1 = ({team_one_players}) => {

    return (
        <ul>
        {
            team_one_players.map(player => (
                <RowPlayer name = { player.name } key = { player.id }/>
            ))
        }
    </ul>
    )

}

export default PlayersCardT1;

