import { useEffect, useState } from "react";
import { getAllTrending, getNowPlayingMovies, getOnTheAir } from "../api/api";

const useHome = () => {
    const [allTrending, setAllTrending] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchingHomeData = async () => {
            setLoading(true)
            try {
                const [allTrendingData, nowPlayingData, onTheAirData] = await Promise.all([
                    getAllTrending(),
                    getNowPlayingMovies(),
                    getOnTheAir()
                ])
                setAllTrending(allTrendingData.slice(0, 10));
                setNowPlaying(nowPlayingData);
                setOnTheAir(onTheAirData);
            }
            catch (error) {
                console.log('failed fetching home data', error)
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        fetchingHomeData();
    }, [])
    return {allTrending, nowPlaying, onTheAir, loading, error};
}
export default useHome;