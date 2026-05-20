import Footer from "../component/Layout/Footer";
import Navbar from "../component/Layout/Navbar";
import useHome from "../hooks/useHome";
import React, { Suspense, useContext, useEffect, useMemo } from "react";
import { GenreContext } from "../context/GenreContext";
import { motion } from "motion/react"
import GridCardSkeleton from "../component/Loading/GridCardSkeleton";
import Loading from "../component/Loading/Loading";
const GridCard = React.lazy(() => import("../component/LayoutCard/GridCard"));
const Banner = React.lazy(() => import("../component/Layout/Banner"))

const Home = () => {
    const { allTrending, nowPlaying, onTheAir, error } = useHome();
    const genre = useContext(GenreContext)
    const allTrendingHome = useMemo(() => {
        return allTrending.map((item) => ({
            ...item,
            genres: item.genre_ids?.map((id) => genre[id])?.filter(Boolean),
        }))
    }, [allTrending, genre])

    if (error) return <p>Error fetching data</p>

    return (
        <>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Banner trending={allTrendingHome} />
            </Suspense>
            <section className="main-container w-full">
                <div
                    className="bg-gray-700 w-full px-4 py-4">
                    <motion.h1 initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }} 
                        className="text-2xl font-bold text-white py-2 my-2">
                        Now Playing Movies
                    </motion.h1>
                    <Suspense fallback={<GridCardSkeleton cards={10} />}>
                        <GridCard data={nowPlaying.slice(0, 10)} mediaType="movie" />
                    </Suspense>
                </div>
                <div
                    className="bg-gray-800 w-full px-4 py-4">
                    <motion.h1 initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }} 
                        className="text-2xl font-bold text-white py-2 mb-4">
                        On The Air Tv Series
                    </motion.h1>
                    <Suspense fallback={<GridCardSkeleton cards={10} />}>
                        <GridCard data={onTheAir.slice(0, 10)} mediaType="tv" />
                    </Suspense>
                </div>
            </section >
            <Footer />
        </>
    )
}
export default Home;