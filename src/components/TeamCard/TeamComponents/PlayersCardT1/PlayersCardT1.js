import RowPlayer from '../RowPlayer';

const PlayersCardT1 = ({team_one_players}) => {

    return (
        <div>
        {
            team_one_players.map(player => (
                <RowPlayer name = { player.name } key = { player.id }/>
            ))
        }
        </div>
    )

}

export default PlayersCardT1;

