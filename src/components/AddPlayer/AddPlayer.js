import { Component } from 'react';

// class based component - state required
class AddPlayer extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            name: "",
        };

        // bind events
        this.handleName = this.handleName.bind(this);
    };

    // handle name input
    handleName = e => {
        this.setState({
            name: e.currentTarget.value
        });
    };

    // handle form submit
    handleSubmit = e => {
        e.preventDefault();

        this.props.handleSubmit({ ...this.state });

        this.setState({
            name: "",
        });

    };


    render() {
        const { name } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit}
                className="card playerInput"
            >
                <h2>Input Player <i className="fas fa-user-plus"></i></h2>
                <div className="flex columnFlex">
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
                            disabled={requiredNumOfPlayers ? true : false}
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
                    <div>
                        <label htmlFor="player skill">
                            Player Skill:
                        </label>
                    </div>

                    <button type="submit">Add Player</button>
                </div>
            </form>
        )
    };
};

export default AddPlayer;