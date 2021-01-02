import GeneratePage from '../components/GeneratePage/GeneratePage';
import Menu from '../pages/Menu/Menu';

const App = ({ page }) => {

    switch(page) {
        case "generate": return <GeneratePage />;
        case "menu": return <Menu /> ;
        default: return <Menu />;
    }
}


export default App;