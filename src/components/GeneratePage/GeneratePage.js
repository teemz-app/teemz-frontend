// import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";

let GeneratePage = ({ handleClick }) => {
    return (
        <>
            {/* <GenerateTeams /> */}
            <GeneratingMatch />

            <Button
            onClick={ handleClick }
            label="Save Game!"
            type="button"
            />
        </>
    )
}

export default GeneratePage;