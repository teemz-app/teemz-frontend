import PlayerCard from '../components/PlayerComponents/PlayerCard';
import { connect} from 'react-redux';
import Loading from '../components/Loading';

const SeePlayersPage = ({players}) => (
    <>
        <Loading>
        {players.map(player => {
                return  <PlayerCard 
                name = {player.name}
                wins = { player.wins }
                losses = { player.losses }
                key = { player.id }
                />
            })
        }
        </Loading>
    </>
)

const mapStatetoProps = (state) => ({players: state.players});

export default connect(mapStatetoProps)(SeePlayersPage);

// export default SeePlayersPage;