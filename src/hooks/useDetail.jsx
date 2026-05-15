import { useEffect, useState } from "react";
import {
    getCreditsMovies,
    getDetailsMovie,
    getImagesMovies,
    getRecomendationMovies,
    getSimilarMovies,
    getVideosMovies,
    getCreditsSeries,
    getDetailsSeries,
    getImagesSeries,
    getRecomendationSeries,
    getSimilarSeries,
    getVideosSeries
} from "../api/api_details";

const useDetail = (id, mediaType) => {
    const [details, setDetails] = useState(null);
    const [recomendation, setRecomendation] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [credits, setCredits] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    const apiMap = {
        movie: {
            details: getDetailsMovie,
            recomendation: getRecomendationMovies,
            similar: getSimilarMovies,
            credits: getCreditsMovies,
            images: getImagesMovies,
            videos: getVideosMovies,
        },
        tv: {
            details: getDetailsSeries,
            recomendation: getRecomendationSeries,
            similar: getSimilarSeries,
            credits: getCreditsSeries,
            images: getImagesSeries,
            videos: getVideosSeries,
        },
    };

    useEffect(() => {
        if (!id || !mediaType) return;

        const fetchData = async () => {

            setDetails(null);
            setRecomendation([]);
            setSimilar([]);
            setCredits([]);
            setImages([]);
            setVideos([]);
            setError(null);

            try {
                const api = apiMap[mediaType];
                if (!api) throw new Error("Invalid mediaType");

                const [
                    detailData,
                    recomendationData,
                    similarData,
                    creditsData,
                    imagesData,
                    videosData
                ] = await Promise.all([
                    api.details(id),
                    api.recomendation(id),
                    api.similar(id),
                    api.credits(id),
                    api.images(id),
                    api.videos(id),
                ]);

                setDetails(detailData);
                setRecomendation(recomendationData);
                setSimilar(similarData);
                setCredits(creditsData);
                setImages(imagesData);
                setVideos(videosData);

            } catch (err) {
                setError(err);
            } 
        };

        fetchData();
    }, [id, mediaType]);

    return {
        details,
        recomendation,
        similar,
        credits,
        images,
        videos,
        error,
    };
};

export default useDetail;