import initial from '../data/Initial';
import RowPlayer from './RowPlayer';

let Players = () => {
    return (
        <ul>
        {
            initial.team_one_players.map((player) => (
                <RowPlayer name = { player } key = { player.id } />
            ))
        }
    </ul>
    )
}


export default Players;


// {this.props.gifts.map((gift) => (
//     <Giftcard gift={gift} key={gift.id} />
// ))}