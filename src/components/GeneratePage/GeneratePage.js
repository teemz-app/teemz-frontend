import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";

let GeneratePage = ({ handleClick, data }) => {
    return (
        <>
            <GeneratingMatch />

            <Button
            handleClick={() => {
                handleClick(data)
            }}
            label="Save Game!"
            type="button"
            />
        </>
    )
}

export default GeneratePage;