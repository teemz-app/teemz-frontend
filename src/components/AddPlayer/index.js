import { connect } from 'react-redux';
import AddPlayer from './AddPlayer';
import { postPlayer } from '../../data/actions/api';

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleClick: (data) => dispatch(postPlayer(data)),
    };
};

export default connect(null, mapDispatchToProps)(AddPlayer)