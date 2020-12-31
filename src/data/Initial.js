// Initial state
const initial = {
    page: "menu",
    loaded: false,

    team_one_score: 0,
    team_two_score: 0,

    team_one_name: "Team 1",
    team_two_name: "Team 2",

    teams_size: 10,

    players: [
        {id: 1, name: "Sokka", wins: 0, losses: 0},
        {id: 2, name: "Ang", wins: 0, losses: 0},
        {id: 3, name: "Appa", wins: 0, losses: 0},
        {id: 4, name: "Momo", wins: 0, losses: 0},
        {id: 5, name: "Iroh", wins: 0, losses: 0},
        {id: 6, name: "Katara", wins: 0, losses: 0},
        {id: 7, name: "Pabu", wins: 0, losses: 0},
        {id: 8, name: "Azula", wins: 0, losses: 0},
        {id: 9, name: "Zuko", wins: 0, losses: 0},
        {id: 10, name: "Toph", wins: 0, losses: 0},
    ],
    
    team_one_players: [],
    team_two_players: [],

};

export default initial;

