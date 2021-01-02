import PlayerCard from '../components/PlayerComponents/PlayerCard';
import { connect} from 'react-redux';
const SeePlayersPage = ({players}) => (
    <div>
        {players.map(player => {
               return  <PlayerCard 
                name = {player.name}
                wins = { player.wins }
                losses = { player.losses }
                key = { player.id }
                />
            })
        }
    </div>
)

const mapStatetoProps = (state) => ({players: state.players});

export default connect(mapStatetoProps)(SeePlayersPage);

// export default SeePlayersPage;