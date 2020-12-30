// Initial state
const initial = {
    page: "GenerateMatch",
    loaded: false,

    team_one_score: 0,
    team_two_score: 0,

    team_one_name: "Team 1",
    team_two_name: "Team 2",

    teams_size: 10,

    player: {
        name: "",
        wins: 0,
        losses: 0,
        },

    players: [],
    // players: ["Katara", "Ang", "Apa", "Sokka", "Momo", "Pabu", "Iroh", "Azula", "Zuko", "Toph"],
    team_one_players: [],
    team_two_players: [],

};

export default initial;

