import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page)

    const goToPage = () => dispatch({
        type: "NAV_TO_MENU"
    });

    return (
        <>
            <header>
                {page === "players" ?
                <h1 className="stickyHeader"
                onClick={ goToPage }
                style={{cursor: "pointer"}}
                >Main Menu</h1>

                :

                <h1 className="title"
                    onClick={ goToPage }
                    style={{cursor: "pointer"}}
                    >Teemz</h1>

                }
            </header>
        </>
    )
    }

export default Header;