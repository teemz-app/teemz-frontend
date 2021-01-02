// import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";

let GeneratePage = ({ handleClick, data }) => {
    return (
        <>
            {/* <GenerateTeams /> */}
            <GeneratingMatch />

            <Button
            handleClick={() => {
                console.log('clicking......')
                handleClick(data)
            }}
            label="Save Game!"
            type="button"
            />
        </>
    )
}

export default GeneratePage;