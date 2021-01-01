import { connect } from 'react-redux';
import Loading from './Loading';
import { getPlayers } from '../../data/actions/api';

const mapStatetoProps = ({ loaded }) => {
    return {
        loaded: loaded,
    };
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleLoad: () => dispatch(getPlayers()),
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Loading)