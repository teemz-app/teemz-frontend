import GenerateMatch from './pages/GenerateMatch/GenerateMatch';
import GenerateTeams from './components/GenerateTeams';

const App = () => ( 
    <>  
        <header>
            <h1 className="title">Teemz</h1>
        </header>
        <GenerateMatch />
        <GenerateTeams />
    </>
);

export default App;