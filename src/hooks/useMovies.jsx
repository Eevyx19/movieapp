import { useContext, useEffect, useState, useMemo } from "react";
import { getPopularMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "../api/api";
import { GenreContext } from "../context/GenreContext";

const useMovies = () => {
    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upComing, setUpComing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const genre = useContext(GenreContext);

    useEffect(() => {
        const fetchingData = async () => {
            setLoading(true)
            try {
                const [trendingData, popularData, topRatedData, upComingData] = await Promise.all([
                    getTrendingMovies(),
                    getPopularMovies(),
                    getTopRatedMovies(),
                    getUpcomingMovies()
                ])
                setTrending(trendingData);
                setPopular(popularData);
                setTopRated(topRatedData);
                setUpComing(upComingData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
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
    
        const upComingFix = useMemo(() => {
            return upComing.map((item) => ({
                ...item,
                genres: item.genre_ids
                    .map((id) => genre[id])
                    .filter(Boolean),
            }))
        }, [upComing, genre])

    return {trendingFix, popularFix, topRatedFix, upComingFix, loading, error};
   
}
export default useMovies;