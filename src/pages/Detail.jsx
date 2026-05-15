import { useParams } from "react-router";
import Navbar from "../component/Layout/Navbar";
import useDetail from "../hooks/useDetail";
import DetailPage from "../component/Detail/DetailPage";
import DetailSkeleton from "../component/Loading/DetailSkeleton";
import Footer from "../component/Layout/Footer";

const Detail = () => {
    const {id, mediaType} = useParams();
    const { details, recomendation, similar, credits, images, videos, error} = useDetail(id, mediaType);

    const detailDatas = {
        details,
        recomendation,
        similar,
        credits,
        images,
        videos
    };

    if(error) return <p>Error Getting Data</p>

    return (
        <>
        <Navbar />
        {!details ? <DetailSkeleton /> : <DetailPage {...detailDatas}/>}
        <Footer />
        </>
    )
    
}
export default Detail;