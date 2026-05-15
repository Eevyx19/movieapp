import { useParams } from "react-router";
import DetailPersonPage from "../component/Detail/DetailPersonPage";
import Loading from "../component/Loading/Loading";
import Navbar from "../component/Layout/Navbar";
import useDetailPeople from "../hooks/useDetailPeople";
import Footer from "../component/Layout/Footer";

const DetailPerson = () => {
    const {id} = useParams()
    const {detail, combinedCredits, externalIds, loading, error} = useDetailPeople(id);
    
    const personData = {
        detail,
        credits: combinedCredits,
        social: externalIds,
    }
    if(loading) return <Loading />
    if(error) return <p>Error Getting Datta</p>
    return (
        <>
        <Navbar solid />
        <DetailPersonPage {...personData}/>
        <Footer />
        </>
    )
}
export default DetailPerson;