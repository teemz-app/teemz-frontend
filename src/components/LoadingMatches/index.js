import { connect } from 'react-redux';
import LoadingMatches from './LoadingMatches';
import { getMatches } from '../../data/actions/api';

const mapStatetoProps = ({ loaded }) => {
    return {
        loaded: loaded,
    };
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleLoad: () => dispatch(getMatches()),
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(LoadingMatches)