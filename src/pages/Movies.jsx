import Navbar from "../component/Layout/Navbar";
import Footer from "../component/Layout/Footer"
import React, { Suspense } from "react";
import GridCardSkeleton from "../component/Loading/GridCardSkeleton";
import FlexCardSkeleton from "../component/Loading/FlexCardSkeleton";
import Loading from "../component/Loading/Loading";
import { motion } from "motion/react"
import useMedia from "../hooks/useMedia";
const GridCard = React.lazy(() => import("../component/LayoutCard/GridCard"));
const FlexCard = React.lazy(() => import("../component/LayoutCard/FlexCard"));
const Banner = React.lazy(() => import("../component/Layout/Banner"));

const Movies = () => {
    const { media, error } = useMedia()

    if (error) return <p>Error fetching data</p>

    return (
        <>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Banner trending={media.movies.trending.slice(0, 7)} />
            </Suspense>
            <section className="main-container w-full">
                <div className="bg-gray-700 w-full px-4 py-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-2xl font-bold text-white py-2 mb-4">
                        Popular Movies
                    </motion.h1>
                    <Suspense fallback={<FlexCardSkeleton cards={10} />}>
                        <FlexCard data={media.movies.popular.slice(0, 10)} mediaType="movie" />
                    </Suspense>
                </div>
                <div className="bg-gray-700 w-full px-4 py-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-2xl font-bold text-white py-2 mb-4">
                        Top Rated Movies
                    </motion.h1>
                    <Suspense fallback={<GridCardSkeleton cards={10} />}>
                        <GridCard data={media.movies.topRated.slice(0, 10)} mediaType="movie" />
                    </Suspense>
                </div>
                <div className="bg-gray-700 w-full px-4 py-4">
                    <motion.h1 initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-2xl font-bold text-white py-2 mb-4">
                        Upcoming Movies
                    </motion.h1>
                    <Suspense fallback={<GridCardSkeleton cards={10} />}>
                        <GridCard data={media.movies.upComing.slice(0, 10)} mediaType="movie" />
                    </Suspense>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Movies;