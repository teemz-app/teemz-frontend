import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
// import Button from "../Button";

let GeneratePage = () => {
    return (
        <>
            <GenerateTeams />
            <GeneratingMatch />

            {/* <Button
            onClick={ console.log("stop logging!") }
            label="Save Game!"
            type="button"
            /> */}
        </>
    )
}

export default GeneratePage;