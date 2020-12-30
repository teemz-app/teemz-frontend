import { /*useSelector,*/ useDispatch } from "react-redux";

const GenerateMatch = () => {
    // const page = useSelector(state => state.page);
    const dispatch = useDispatch();

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