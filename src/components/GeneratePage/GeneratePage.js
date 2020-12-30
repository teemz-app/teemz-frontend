import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";

let GeneratePage = () => {
    return (
        <>
            <GenerateTeams />
            <GeneratingMatch />

            <Button
            onClick={ console.log("saved!") }
            label="Save Game!"
            />
        </>
    )
}

export default GeneratePage;