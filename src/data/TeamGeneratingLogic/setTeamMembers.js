/*
GENERATING THE TWO TEAMS
The top two players are passed into individual arrays. then second best player gets slightly higher level teammates than the best player.
*/
let setTeamMembers = (playerPool) => {
    let firstOfT1 = playerPool[0];
    let firstOfT2 = playerPool[1];

    // Pass highest level player into team 1
    let team_one_players = []
    team_one_players.push(firstOfT1);

    // pass second highest level player into team 2
    let team_two_players = [];
    team_two_players.push(firstOfT2);


    // odd indexed players go into team 1, and even indexed players go into team two, excluding the top two players
    for (let i = 2; i < (playerPool.length); i += 1) {
        i % 2 === 0 ? team_two_players.push(playerPool[i]) : team_one_players.push(playerPool[i]);
    }

    // we return the balanced teams as an object containins the two team arrays
    return {
        team_one_players: team_one_players,
        team_two_players: team_two_players,
    };
}

export default setTeamMembers;
