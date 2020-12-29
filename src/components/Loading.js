import { Component } from 'react';

class Loading extends Component {
    render() {
        const { children, loaded } = this.props;

        return loaded ? children : (
            <div className="progress">
                <p className="teamCard_teamScore">Loading...</p>
            </div>
        );
    }
}

export default Loading;