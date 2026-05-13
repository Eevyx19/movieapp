import Banner from "../component/Banner"
import Navbar from "../component/Navbar"
import useSeries from "../hooks/useSeries"
import Popular from "../component/Popular"
import TopRated from "../component/TopRated"
import AiringTodaySeries from "../component/AiringTodaySeries"
import Footer from "../component/Footer"
import Loading from "../component/Loading"

const TV = () => {
    const {trendingFix, popularFix, topRatedFix, airingTodayFix, loading, error} = useSeries();
   
    const trendingTv = trendingFix.slice(0, 7);
    const popularTv = popularFix.slice(0, 10);
    const topRatedTv = topRatedFix.slice(0, 12);
    const airingTodayTv = airingTodayFix.slice(0, 12);

    if(loading) return <Loading />
    if (error) return <p>Error getting data</p>
    return(
        <>
        <Navbar />
        <Banner trending={trendingTv} />
        <Popular popular={popularTv} loading={loading} type="series"/>
        <TopRated topRated={topRatedTv} loading={loading} type="series"/>
        <AiringTodaySeries airingToday={airingTodayTv} loading={loading} />
        <Footer />
        </>
    )
}
export default TV