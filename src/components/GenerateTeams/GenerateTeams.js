import { Component } from "react";

class GenerateTeams extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            players: this.props.players,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("teams generated!");
    }

    render() {

        return (
            <>
                <button
                    className="doButton"
                    onClick= { this.onClick }
                >
                    Generate Teams
                </button>
        </>
        )
    }
}

export default GenerateTeams;




