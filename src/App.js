import GeneratingMatch from './pages/GeneratingMatch';
import GenerateTeams from './components/GenerateTeams';
import GenerateMatch from './components/GenerateMatch';

const App = () => ( 
    <>  
        <header>
            <h1 className="title">Teemz</h1>
        </header>
            <GenerateTeams />
            <GeneratingMatch />
            <GenerateMatch />
    </>
);

export default App;