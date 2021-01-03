import ScoreCard from '../TeamCard/ScoringComponents/ScoreCardT2';
import PlayersCardT2 from '../TeamCard/TeamComponents/PlayersCardT2';
import { Component } from 'react';

// class based component - state required
class TeamCardT2 extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            team_two_name: "Team 2",
        };

        // bind events
        this.handleName = this.handleName.bind(this);
    };

    handleName = e => {
        this.setState({
            ...this.state,
            team_two_name: e.target.value
        });
        this.props.handleSubmit(e.target.value);
    };


    render() {
        const { team_two_name } = this.state;

        return (
            <>
            <div className="teamCard_container">
                <input
                type="text"
                value={team_two_name}
                onChange={this.handleName}
                maxLength="35"
                minLength="2"
                className="teamCard_teamName" />
        
                <PlayersCardT2 />
                <ScoreCard />
            </div>
        </>
        )
    };
}

export default TeamCardT2;