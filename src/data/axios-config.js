import axios from "axios";

export default axios.create({
    baseURL: "https://peaceful-sea-21894.herokuapp.com/api/",
    headers: {
        Accept: "application/json",
    }
})