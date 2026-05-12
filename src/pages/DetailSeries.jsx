import { useParams } from "react-router";
import Navbar from "../component/Navbar";
import useDetailSeries from "../hooks/useDetailSeries";
import DetailPage from "../component/DetailPage";
import Footer from "../component/Footer";
const DetailSeries = () => {
    const {id} = useParams();
    const {details, recomendation, similar, credits, images, videos, loading} = useDetailSeries(id);
    
    const recomendationSeries = recomendation.slice(0, 10);
    const similarSeries = similar.slice(0, 10);
    const detailDatas = {
        details,
        recomendation: recomendationSeries,
        similar: similarSeries,
        credits,
        images,
        videos,
        loading
    };
    return (
        <>
        <Navbar />
        <DetailPage {...detailDatas} type="series"/>
        <Footer />
        </>
    )
}
export default DetailSeries;
