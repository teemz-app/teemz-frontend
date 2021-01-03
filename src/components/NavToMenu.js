import { useDispatch } from "react-redux";

// A navigation button to take the user to the Menu page

const NavToMenu = () => {
    const dispatch = useDispatch();

    const goToPage = () => dispatch({
        type: "NAV_TO_MENU"
    });

        return (
            <>
                <button
                    className="doButton"
                    onClick= { goToPage }
                >
                    Main Menu
                </button>
        </>
        )
    }

export default NavToMenu;