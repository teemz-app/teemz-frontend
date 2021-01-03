import { Component } from 'react';

// class based component - state required
class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        };

        this.handleName = this.handleName.bind(this);
    };

    // Name Input
    handleName = e => {
        this.setState({
            name: e.currentTarget.value
        });
    };

    // handle form submit
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleClick({ ...this.state });

        this.setState({
            name: "",
        });
    };

    render() {
        const { name } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit}>
                <h2>Input Player</h2>
                <div>
                    <div >
                        <label htmlFor="player name">
                            Enter new Player Name:
                        </label>

                        <input
                            type="text"
                            id="player name"
                            name="player name"
                            value={name}
                            onChange={this.handleName}
                            maxLength="25"
                            minLength="2"
                            required
                            ref={function (input) {
                                if (input != null) {
                                    input.focus();
                                }
                            }}
                        />
                    </div>

                    <button disabled={name.length <= 2} type="submit">Add Player</button>
                </div>
            </form>
        )
    };
};

export default AddPlayer;