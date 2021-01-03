const PlayerAdded = ({ playersAdded }) => {
    if (playersAdded > 0) {
        return (
            <>  
                <p className="playerAdded">Player Added!</p>
            </>
        )
    }
    return <></>;
};

export default PlayerAdded;
