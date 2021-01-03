import { Component } from 'react';

/*
Add player has an input field. On submit will fire off the API post request via axios, clear the input field, and reselect it. 
This way the user can submit several players without having to use the mouse
*/
class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "", // start empty
        };

        this.handleName = this.handleName.bind(this);
    };

    // Name Input
    handleName = e => {
        this.setState({
            name: e.currentTarget.value // tracking user inputs
        });
    };

    // handle form submit
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleClick({ ...this.state }); // pass the value to axios and state

        this.setState({
            name: "", // clear input field
        });
    };

    render() {
        const { name } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit}>
                <div className="menu_playerContaier">
                        <input
                            className="menu_inputField"
                            type="text"
                            value={name}
                            onChange={this.handleName}
                            maxLength="25"
                            minLength="2"
                            required
                            ref={function (input) { // refocus onto the input field once submitted.
                                if (input != null) {
                                    input.focus();
                                }
                            }}
                        />
                    <button disabled={name.length <= 2} type="submit" className="doButton">Add Player</button>  {/* Submit request if name is more than two characters long */}
                </div>
            </form>
        )
    };
};

export default AddPlayer;