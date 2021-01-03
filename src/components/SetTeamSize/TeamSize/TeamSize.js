const TeamSize = ({ teams_size }) => ( 
    <>  
        <h2 className="menu_setTeamSize_title">Set Team Size</h2>
        <p className="teamCard_teamScore">{ teams_size / 2 }</p>
    </>
);
// The state records teams_size i.e total players. So divide it by two so as to display players per team
export default TeamSize;
