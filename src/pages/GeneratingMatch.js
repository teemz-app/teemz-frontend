import TeamCardT1 from "../components/TeamCardT1";
import TeamCardT2 from "../components/TeamCardT2";
import Loading from '../components/Loading';
// import SeePlayersPage from './SeePlayersPage';

const GeneratingMatch = () => { 
    return ( 
    <>
        <Loading>
            <TeamCardT1 />
            <TeamCardT2 />
            {/* <SeePlayersPage /> */}
        </Loading>


    </>
);
}

export default GeneratingMatch;