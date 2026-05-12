import { useEffect, useState } from "react"
import { getCreditsSeries, getDetailsSeries, getImagesMovies, getImagesSeries, getRecomendationSeries, getSimilarSeries, getVideosSeries } from "../api/api_details";
const useDetailSeries = (id) => {
    const [details, setDetails] = useState([]);
    const [recomendation, setRecomendation] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [credits, setCredits] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchingDetailsSeries = async () => {
            setLoading(true)
            try {
                const [detailData, recomendationData, similarData, creditsData, imagesData, videosData] = await Promise.all([
                    getDetailsSeries(id),
                    getRecomendationSeries(id),
                    getSimilarSeries(id),
                    getCreditsSeries(id),
                    getImagesSeries(id),
                    getVideosSeries(id)

                ])
                setDetails(detailData);
                setRecomendation(recomendationData);
                setSimilar(similarData);
                setCredits(creditsData);
                setImages(imagesData);
                setVideos(videosData);

            } catch (error) {
                console.log("Error get data", error);
            } finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchingDetailsSeries();
        }
    }, [id])
    return { details, recomendation, similar, credits, images, videos, loading };


}
export default useDetailSeries;

