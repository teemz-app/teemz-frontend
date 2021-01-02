// Control Team One Scoring
import incReducerT1 from './ScoringCardsLogic/incReducerT1';
import decReducerT1 from './ScoringCardsLogic/decReducerT1';

// Control Team Two Scoring
import incReducerT2 from './ScoringCardsLogic/incReducerT2';
import decReducerT2 from './ScoringCardsLogic/decReducerT2';

// Navigate Pages
import navGenPageReducer from "./NavigationLogic/navGenPageReducer";
import navMenuPageReducer from './NavigationLogic/navMenuPageReducer';

// Generate Teams
import setTeamsReducer from './TeamGeneratingLogic/setTeamsReducer';


const playersLoadedReducer = (state, action) => {
    return {
        ...state,
        players: action.payload,
        loaded: true,
    }
}


let reducer = (state, action) => {
    switch (action.type) {

        // Team One Scoring
        case "INC_TEAM_ONE": return incReducerT1(state);
        case "DEC_TEAM_ONE": return decReducerT1(state);

        // Team Two Scoring
        case "INC_TEAM_TWO": return incReducerT2(state);
        case "DEC_TEAM_TWO": return decReducerT2(state);

        // Navigate Pages
        case "NAV_TO_GENERATE": return navGenPageReducer(state);
        case "NAV_TO_MENU": return navMenuPageReducer(state); 

        // Generate Teams
        case "PLAYERS_LOADED": return {...state, players: action.payload, loaded: true};
        case "GENERATE_TEAMS": return setTeamsReducer(state);
        
        default: return state;
    }
};

export default reducer;