import RowPlayer from '../RowPlayer';
// import { connect } from 'react-redux';


// class Players extends Component {

// }

const PlayersCardT2 = ({ team_two_players }) => {
    
    return (
        <ul>
        {
            team_two_players.map(player => (
                <RowPlayer name = { player } key = { player.id } />
            ))
        }
    </ul>
    )

}

export default PlayersCardT2;