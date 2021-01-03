import TeamCardT1 from "../components/TeamCardT1";
import TeamCardT2 from "../components/TeamCardT2";
import Loading from '../components/Loading';


const GeneratingMatch = () => { 
    return ( 
    <>
        <Loading>
            <TeamCardT1 />
            <TeamCardT2 />
        </Loading>


    </>
);
}

export default GeneratingMatch;