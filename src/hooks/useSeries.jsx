import { useEffect, useState, useMemo, useContext } from "react";
import { getAiringTodayTv, getPopularTv, getTopRatedTv, getTrendingTv } from "../api/api";
import { GenreContext } from "../context/GenreContext";

const useSeries = () => {
    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [airingToday, setAiringToday] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
     const genre = useContext(GenreContext)

    useEffect(() => {
        const fetchingData = async () => {
            setLoading(true)
            try {
                const [trendingData, popularData, topRatedData, airingTodayData] = await Promise.all([
                    getTrendingTv(),
                    getPopularTv(),
                    getTopRatedTv(),
                    getAiringTodayTv()
                ])
                setTrending(trendingData);
                setPopular(popularData);
                setTopRated(topRatedData);
                setAiringToday(airingTodayData);
            }
             catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchingData();
    }, [])

        const trendingFix = useMemo(() => {
        return trending.map((item) => ({
            ...item,
            genres: item.genre_ids
                .map((id) => genre[id])
                .filter(Boolean),
        }))
    }, [trending, genre])

    const popularFix = useMemo(() => {
        return popular.map((item) => ({
            ...item,
            genres: item.genre_ids
                .map((id) => genre[id])
                .filter(Boolean),
        }))
    }, [popular, genre])

    const topRatedFix = useMemo(() => {
        return topRated.map((item) => ({
            ...item,
            genres: item.genre_ids
                .map((id) => genre[id])
                .filter(Boolean),
        }))
    }, [topRated, genre])

    const airingTodayFix = useMemo(() => {
        return airingToday.map((item) => ({
            ...item,
            genres: item.genre_ids
                .map((id) => genre[id])
                .filter(Boolean),
        }))
    }, [airingToday, genre])


    return {trendingFix, popularFix, topRatedFix, airingTodayFix, loading, error};
}
export default useSeries;