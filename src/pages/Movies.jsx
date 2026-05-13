import { getPopularMovies, getTrendingMovies } from "../api/api";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import Popular from "../component/Popular";
import useMovies from "../hooks/useMovies";
import TopRated from "../component/TopRated";
import UpComingMovies from "../component/UpComingMovies";
import Footer from "../component/Footer"
import Loading from "../component/Loading";

const Movies = () => {
    const { trendingFix, popularFix, topRatedFix, upComingFix, loading, error } = useMovies();

    const trendingMovies = trendingFix.slice(0, 7);
    const popularMovies = popularFix.slice(0, 10);
    const topRatedMovies = topRatedFix.slice(0, 12);
    const upComingMovies = upComingFix.slice(0, 12)

    if(loading) return <Loading />
    if (error) return <p>Error fetching data</p>
    return (
        <>
            <Navbar />
            <Banner trending={trendingMovies} />
            <Popular popular={popularMovies} loading={loading} type="movies"/>
            <TopRated topRated={topRatedMovies} loading={loading} type="movies"/>
            <UpComingMovies upComing={upComingMovies} loading={loading} />
            <Footer />
        </>
    )
}
export default Movies;