const navMenuPageReducer = (state) => { // logic to show menu page
    return {
        ...state,
        page: "menu",
    }
}

export default navMenuPageReducer;