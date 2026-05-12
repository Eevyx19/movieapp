import Banner from "../component/Banner"
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import NowPlayingMovie from "../component/NowPlayingMovie";
import TvOnTheAir from "../component/OnTheAir";
import useHome from "../hooks/useHome";
import { useContext, useMemo } from "react";
import { GenreContext } from "../context/GenreContext";
import OnTheAir from "../component/OnTheAir";

const Home = () => {
    const {allTrending, nowPlaying, onTheAir, loading, error} = useHome();
    const genre = useContext(GenreContext)

    const allTrendingHome = useMemo (() =>{
        return allTrending.map((item) => ({
            ...item,
            genres: item.genre_ids
            .map((id) => genre[id])
            .filter(Boolean),
        }))
    })

    const nowPlayingMovies = nowPlaying.slice(0, 12);
    const onTheAirTvs = onTheAir.slice(0, 12);

    if (error) return <p>Error fetching data</p>

    return (
        <>
            <Navbar />
            <Banner trending={allTrendingHome}/>
            <NowPlayingMovie nowPlay={nowPlayingMovies} loading={loading} />
            <OnTheAir onTheAir={onTheAirTvs} loading={loading}/>
            <Footer />
        </>
    )
}
export default Home;