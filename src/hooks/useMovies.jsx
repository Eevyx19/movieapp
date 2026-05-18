import { useContext, useEffect, useState, useMemo } from "react";
import { getPopularMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "../api/api";
import { GenreContext } from "../context/GenreContext";
import { useSearchParams } from "react-router";

const useMovies = () => {
    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upComing, setUpComing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const genre = useContext(GenreContext);

    const page = Number(searchParams.get("page")) || 1;
    
    useEffect(() => {
        const fetchingData = async () => {
            setLoading(true)
            try {
                const [trendingData, popularData, topRatedData, upComingData] = await Promise.all([
                    getTrendingMovies(page),
                    getPopularMovies(page),
                    getTopRatedMovies(page),
                    getUpcomingMovies(page)
                ])
                setTrending(trendingData.results);
                setPopular(popularData.results);
                setTopRated(topRatedData.results);
                setUpComing(upComingData.results);
                
            } catch (error) {
                setError(error);
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
    return {trendingFix, popular, topRated, upComing, loading, error};
   
}
export default useMovies;