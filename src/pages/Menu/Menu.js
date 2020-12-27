import Button from '../../components/Button';
import GenerateTeamButton from '../../components/MenuButtons/GenerateTeamButton';

let Menu = ({onGenerate, onSeePlayers, onSeeMatches}) => (

    <>
        <h1>Teemz</h1>

        <form>
            <GenerateTeamButton
            onClick = { onGenerate }
            label = "Generate Teams"
            />

            <Button
            onClick = { onSeePlayers }
            label = "See Players"
            disabled = {true}
            />
            <p>Coming Soon</p>

            <Button
            onClick = { onSeeMatches }
            label = "See Matches"
            />
        </form>
    </>
        );


export default Menu;