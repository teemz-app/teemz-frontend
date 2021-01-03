// Control Team One Scoring
import incReducerT1 from './ScoringCardsLogic/incReducerT1';
import decReducerT1 from './ScoringCardsLogic/decReducerT1';

// Control Team Two Scoring
import incReducerT2 from './ScoringCardsLogic/incReducerT2';
import decReducerT2 from './ScoringCardsLogic/decReducerT2';

// Navigate Pages
import navGenPageReducer from "./NavigationLogic/navGenPageReducer";
import navMenuPageReducer from './NavigationLogic/navMenuPageReducer';
import navPlayersPageReducer from './NavigationLogic/navPlayersPageReducer';
import navMatchesPageReducer from './NavigationLogic/navMatchesPageReducer';

// Generate Teams
import setTeamsReducer from './TeamGeneratingLogic/setTeamsReducer';
import navSavedGamePageReducer from './NavigationLogic/navSavedGamePageReducer';



let reducer = (state, action) => {
    switch (action.type) {

        // Team One Scoring
        case "INC_TEAM_ONE": return incReducerT1(state);
        case "DEC_TEAM_ONE": return decReducerT1(state);

        // Team Two Scoring
        case "INC_TEAM_TWO": return incReducerT2(state);
        case "DEC_TEAM_TWO": return decReducerT2(state);

        // Navigate Pages
        case "NAV_TO_MENU": return navMenuPageReducer(state); 
        case "NAV_TO_GENERATE": return navGenPageReducer(state);
        case "NAV_TO_PLAYERS": return navPlayersPageReducer(state);
        case "NAV_TO_MATCHES": return navMatchesPageReducer (state);
        case "NAV_TO_SAVED_GAME": return navSavedGamePageReducer(state);

        // Generate Teams
        case "PLAYERS_LOADED": return {...state, players: action.payload, loaded: true};
        case "GENERATE_TEAMS": return setTeamsReducer(state);

        // Set Teams
        case "MATCHES_LOADED": return {...state, matches: action.payload, loaded: true};
        default: return state;
    }
};

export default reducer;