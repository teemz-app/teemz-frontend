import { Component } from 'react';
import loadingIcon from '../../assets/loadingIcon.gif';

class Loading extends Component {
    componentDidMount() {
        const { handleLoad } = this.props;
        handleLoad();
    }
    
    render() {
        const { children, loaded } = this.props;

        return loaded ? children : (
            <div className="teamCard_container">
                <p className="title">Loading...</p>
                <img className="loadingIcon" src={ loadingIcon } alt="CGI football spinning" />
            </div>
        );
    }
}

export default Loading;