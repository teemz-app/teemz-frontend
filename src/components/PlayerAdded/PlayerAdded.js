const PlayerAdded = ({ playersAdded }) => {
    if (playersAdded > 0) {

        for (let i = 0; i < playersAdded; i += 1) {
            return (
                <>  
                    <p className="teamCard_teamScore">Player Added!</p>
                </>
            )
        }
    }
    return;
};

export default PlayerAdded;
