import { useEffect, useState } from "react"
import { getCreditsMovies, getDetailsMovie, getImagesMovies, getRecomendationMovies, getSimilarMovies, getVideosMovies } from "../api/api_details";

const useDetailMovies = (id, mediaType) => {
    const [details, setDetails] = useState(null);
    const [recomendation, setRecomendation] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [credits, setCredits] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchingDetailsMovie = async () => {
            setLoading(true)

            setDetails(null);
            setRecomendation([]);
            setSimilar([]);
            setCredits([]);
            setImages([]);
            setVideos([]);

            try {
                const [detailData, recomendationData, similarData, creditsData, imagesData, videosData] = await Promise.all([
                    getDetailsMovie(id),
                    getRecomendationMovies(id),
                    getSimilarMovies(id),
                    getCreditsMovies(id),
                    getImagesMovies(id),
                    getVideosMovies(id)
                ])
                setDetails(detailData);
                setRecomendation(recomendationData);
                setSimilar(similarData);
                setCredits(creditsData);
                setImages(imagesData);
                setVideos(videosData);

            } catch (error) {
                console.log("Error get data", error);
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchingDetailsMovie();
        }
    }, [id])
    return { details, recomendation, similar, credits, images, videos, loading, error };
}
export default useDetailMovies;