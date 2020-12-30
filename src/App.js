import GenerateMatch from './pages/GenerateMatch/GenerateMatch';
import GenerateTeams from './components/GenerateTeams';
import Loading from './components/Loading';

const App = () => ( 
    <>  
        <header>
            <h1 className="title">Teemz</h1>
        </header>
        {/* <Loading> */}
            <GenerateTeams />
            <GenerateMatch />
        {/* </Loading> */}

    </>
);

export default App;