import RowPlayer from '../RowPlayer';
// import { connect } from 'react-redux';


// class Players extends Component {

// }

const PlayersCardT1 = ({ team_one_players }) => {

    return (
        <ul>
        {
            team_one_players.map(player => (
                <RowPlayer name = { player } key = { player } />
            ))
        }
    </ul>
    )

}

export default PlayersCardT1;