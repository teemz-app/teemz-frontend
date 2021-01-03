import { connect} from 'react-redux';
import Loading from '../components/LoadingMatches';
import MatchCard from '../components/MatchCard';

const SeeMatchesPage = ({matches}) => (
    <>
        <Loading>
            <div style={{margin: "100px"}} />
            {matches.map(match => {
                    return  <MatchCard 
                    team_one = { match.team_one }
                    team_one_score = { match.team_one_score }
                    team_two = { match.team_one }
                    team_two_score = { match.team_two_score }
                    key = { match.id }
                    />
                })
            }
        </Loading>
    </>
)

const mapStatetoProps = (state) => ({matches: state.matches});

export default connect(mapStatetoProps)(SeeMatchesPage);