import ScoreCard from '../TeamCard/ScoringComponents/ScoreCardT1';
import PlayersCardT1 from '../TeamCard/TeamComponents/PlayersCardT1';
import { Component } from 'react';

// class based component - state required
class TeamCardT1 extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            team_one_name: "Team 1",
        };

        // bind events
        this.handleName = this.handleName.bind(this);
    };

    handleName = e => {
        this.setState({
            ...this.state,
            team_one_name: e.target.value
        });
        this.props.handleSubmit(e.target.value);
    };


    render() {
        const { team_one_name } = this.state;

        return (
            <>
            <div className="teamCard_container">
                <input
                type="text"
                value={team_one_name}
                onChange={this.handleName}
                maxLength="35"
                minLength="2"
                className="teamCard_teamName" />
        
                <PlayersCardT1 />
                <ScoreCard />
            </div>
        </>
        )
    };
}

export default TeamCardT1;