const TeamSize = ({ teams_size }) => ( 
    <>  
        <h2 className="menu_setTeamSize_title">Set Team Size</h2>
        <p className="teamCard_teamScore">{ teams_size / 2 }</p>
    </>
);

export default TeamSize;
