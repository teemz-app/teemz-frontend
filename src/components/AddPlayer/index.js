import { connect } from 'react-redux';
import AddPlayer from './PlayerInputForm';
import { postPlayer } from '../../data/actions/api';
import AddPlayer from './AddPlayer';

// State
const mapStateToProps = ({ player }) => {
    return {
        player,
    };
};

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => { dispatch(postPlayer(data)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer)