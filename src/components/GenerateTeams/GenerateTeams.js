import { Component } from "react";

class GenerateTeams extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.player.name,
            wins: this.props.player.wins,
            losses: this.props.player.losses
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getPlayers(); 
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




