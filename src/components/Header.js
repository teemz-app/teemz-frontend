import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    const goToPage = () => dispatch({
        type: "NAV_TO_MENU"
    });

    return (
        <>
            <header>
                <h1 className="title"
                    onClick={ goToPage }
                    style={{cursor: "pointer"}}
                    >Teemz</h1>
            </header>
        </>
    )
    }

export default Header;