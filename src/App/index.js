import { connect } from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
    return {
        page: state.page,
    };
};



export default connect(mapStateToProps)(App);
