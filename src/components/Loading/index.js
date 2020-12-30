import { connect } from 'react-redux';
import Loading from './Loading';
import { getPlayers } from '../../data/actions/api';


const mapStateToProps = ({ loaded }) => {
    return {
        loaded: loaded,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoad: () => dispatch(getPlayers()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);