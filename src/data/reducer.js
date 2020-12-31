// Control Team One Scoring
import incReducerT1 from './ScoringCardsLogic/incReducerT1';
import decReducerT1 from './ScoringCardsLogic/decReducerT1';

// Control Team Two Scoring
import incReducerT2 from './ScoringCardsLogic/incReducerT2';
import decReducerT2 from './ScoringCardsLogic/decReducerT2';

// Generate Teams
// import randomiseReducer from './TeamGeneratingLogic/randomiseReducer';

// Navigate Pages
import navGenPageReducer from "./NavigationLogic/navGenPageReducer";
import { getPlayers } from './actions/api';

let reducer = (state, action) => {
    switch (action.type) {

        // Team One Scoring
        case "INC_TEAM_ONE": return incReducerT1(state);
        case "DEC_TEAM_ONE": return decReducerT1(state);

        // Team Two Scoring
        case "INC_TEAM_TWO": return incReducerT2(state);
        case "DEC_TEAM_TWO": return decReducerT2(state);

        // Generate Teams
        case "GET_PLAYERS": return getPlayers(state);
        // case "GENERATE_TEAMS": return randomiseReducer(state);

        // Navigate Pages
        case "NAV_TO_GENERATE": return navGenPageReducer(state);
        
        default: return state;
    }
};

export default reducer;