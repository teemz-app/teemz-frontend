import GeneratePage from '../components/GeneratePage/GeneratePage';
import Menu from '../pages/Menu/Menu';


const App = ({ page }) => {
    <>
        <header>
            <h1 className="title">Teemz</h1>
        </header>
    </>

    switch(page) {
        case "generate": return <GeneratePage />;
        case "menu": return <Menu />;
        default: return <Menu />;
    }
}


export default App;