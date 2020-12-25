import { Component } from "react";
import Button from './Button';
class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            page: "menu",
            playerInput: ""
        };

        this.handleGenTeams = this.handleGenTeams.bind(this);
        this.handleSeePlayers = this.handleSeePlayers.bind(this);
        this.handleSeeMatches = this.handleSeeMatches.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        // this.handlePlayerInput = this.handlePlayerInput.bind(this);  
    }

    // componentDidMount() {
    // 	this.props.postPlayer();
    // }

    handleGenTeams(e) {
        e.preventDefault();
        this.setState({page: "generate_team" });
    }

    handleSeePlayers(e) {
        e.preventDefault();
        this.setState({ page: "see_players" });
    }

    handleSeeMatches(e) {
        e.preventDefault();
        this.setState({ page: "see_matches" });
    }

    handleAddPlayer(e) { 
        e.preventDefault();
        console.log("player added!") }

    // handlePlayerInput(e) {
    //     this.setState({ playerInput: e.currentTarget.value });
    // }

    render() {
        // let { playerInput } = this.state;

        return (
            <>
                <h1>Teemz</h1>

                <form>
                    <Button
                    onClick = { this.handleGenTeams }
                    label = "Generate Teams"
                    />

                    <Button
                    onClick = { this.handleSeePlayers }
                    label = "See Players"
                    />

                    <Button
                    onClick = { this.handleSeeMatches }
                    label = "See Matches"
                    />

                    <input handleChange= { this.handlePlayerInput }></input>

                    <Button
                    onClick = { this.handleAddPlayer }
                    label = "Add Player"
                    />  

                </form>
            </>
        );
    }
}

export default Menu;