import { connect } from "react-redux";
import App from "./App";

/*
This react-redux wrapper passes page into App.js so that it can display the appropriate pages
*/

let mapStateToProps = (state) => {
    return {
        page: state.page,
    };
};

export default connect(mapStateToProps)(App);
