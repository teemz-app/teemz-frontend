import { useDispatch } from "react-redux";

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