import { useSelector, useDispatch } from "react-redux";

const GenerateMatch = () => {
    const page = useSelector(state => state.page);
    const dispatch = useDispatch();

    // sets up the initial value of counter
    // and gives back the current value and a function to update counter

    // the event handler
    // uses the provided function to set the value of counter
    const updatePage = () => dispatch({
        type: "NAV_TO_GENERATE"
    });


      // display counter and setup click handler
    return <button
        className="doButton"
        onClick={ updatePage }>
        Generate Match!
        </button>;
}
    export default GenerateMatch;