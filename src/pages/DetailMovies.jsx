import { useParams } from "react-router";
import Navbar from "../component/Navbar";
import useDetailsMovies from "../hooks/useDetailMovies";
import DetailPage from "../component/DetailPage";
import Footer from "../component/Footer";
import Loading from "../component/Loading";

const DetailMovies = () => {
    const {id, mediaType} = useParams();
    const { details, recomendation, similar, credits, images, videos, loading, error} = useDetailsMovies(id, mediaType);

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

    if(loading || !details) {
        return <Loading />
    }
    if(error) return <p>Error Getting Datta</p>

    return (
        <>
        <Navbar />
        <DetailPage {...detailDatas} type="movies"/>
        <Footer />
        </>
    )
    
}
export default DetailMovies;