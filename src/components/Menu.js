import { Component } from "react";
import Button from './Button';
class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            page: "menu",
        };

        this.handleGenTeams = this.handleGenTeams.bind(this);
        this.handleSeePlayers = this.handleSeePlayers.bind(this);
        this.handleSeeMatches = this.handleSeeMatches.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handlePlayerInput = this.handlePlayerInput.bind(this);  
    }

    // componentDidMount() {
    // 	this.props.getGifts();
    // }

    handlePlayerInput(e) {
        this.setState({ item_name: e.currentTarget.value });
    }

    render() {
        return (
            <>
                <h1>Teemz</h1>

                <form>
                    <Button
                    onClick = {console.log("generated!")}
                    name = "Generate Teams"
                    />

                    <Button
                    onClick = {console.log("see players!")}
                    name = "See Players"
                    />

                    <Button
                    onClick = {console.log("See matches!")}
                    name = "See Matches"
                    />

                    <input></input>

                    <Button
                    onClick = {console.log("player added!")}
                    name = "Add Player"
                    />  

                </form>
            </>
        );
    }
}

export default Menu;