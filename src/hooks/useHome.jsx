import { useEffect, useState } from "react";
import { getAllTrending, getNowPlayingMovies, getOnTheAir } from "../api/api";

const useHome = () => {
    const [allTrending, setAllTrending] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchingHomeData = async () => {
            try {
                const [allTrendingData, nowPlayingData, onTheAirData] = await Promise.all([
                    getAllTrending(),
                    getNowPlayingMovies(),
                    getOnTheAir()
                ])
                setAllTrending(allTrendingData);
                setNowPlaying(nowPlayingData);
                setOnTheAir(onTheAirData);
            }
            catch (error) {
                console.log('failed fetching home data', error)
                setError(error)
            } 
        }
        fetchingHomeData();
    }, [])
    return {allTrending, nowPlaying, onTheAir, error};
}
export default useHome;