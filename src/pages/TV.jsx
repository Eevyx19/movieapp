import Navbar from "../component/Layout/Navbar"
import useSeries from "../hooks/useSeries"
import Footer from "../component/Layout/Footer"
import GridCardSkeleton from "../component/Loading/GridCardSkeleton";
import FlexCardSkeleton from "../component/Loading/FlexCardSkeleton";
import Loading from "../component/Loading/Loading";
import React, { Suspense } from "react";
import { motion } from "motion/react"
const GridCard = React.lazy(() => import("../component/LayoutCard/GridCard"));
const FlexCard = React.lazy(() => import("../component/LayoutCard/FlexCard"));
const Banner = React.lazy(() => import("../component/Layout/Banner"));

const TV = () => {
    const { trendingFix, popularFix, topRatedFix, airingTodayFix, loading, error } = useSeries();

    if (error) return <p>Error getting data</p>
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Banner trending={trendingFix.slice(0, 7)} />
            </Suspense>
            <section className="main-container w-full">
                <div className="bg-gray-700 w-full px-4 py-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-2xl font-bold text-white py-2 mb-4">
                        Popular Tv Shows
                    </motion.h1>
                    <Suspense fallback={<FlexCardSkeleton cards={10} />}>
                        <FlexCard data={popularFix.slice(0, 10)} mediaType="tv" />
                    </Suspense>
                </div>
                <div className="bg-gray-700 w-full px-4 py-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-2xl font-bold text-white py-2 mb-4">
                        Top Rated Tv Shows
                    </motion.h1>
                    <Suspense fallback={<GridCardSkeleton cards={10} />}>
                        <GridCard data={topRatedFix.slice(0, 10)} mediaType="tv" />
                    </Suspense>
                </div>
                <div className="bg-gray-700 w-full px-4 py-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-2xl font-bold text-white py-2 mb-4">
                        Tv Shows Airing Today
                    </motion.h1>
                    <Suspense fallback={<GridCardSkeleton cards={10} />}>
                        <GridCard data={airingTodayFix.slice(0, 10)} mediaType="tv" />
                    </Suspense>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default TV