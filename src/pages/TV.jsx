import Navbar from "../component/Layout/Navbar"
import Footer from "../component/Layout/Footer"
import GridCardSkeleton from "../component/Loading/GridCardSkeleton";
import FlexCardSkeleton from "../component/Loading/FlexCardSkeleton";
import Loading from "../component/Loading/Loading";
import React, { Suspense } from "react";
import { motion } from "motion/react"
import useMedia from "../hooks/useMedia";
const GridCard = React.lazy(() => import("../component/LayoutCard/GridCard"));
const FlexCard = React.lazy(() => import("../component/LayoutCard/FlexCard"));
const Banner = React.lazy(() => import("../component/Layout/Banner"));

const TV = () => {
    const {media, error} = useMedia()

    if (error) return <p>Error getting data</p>
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Banner trending={media.tv.trending.slice(0, 7)} />
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
                        <FlexCard data={media.tv.popular.slice(0, 10)} mediaType="tv" />
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
                        <GridCard data={media.tv.topRated.slice(0, 10)} mediaType="tv" />
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
                        <GridCard data={media.tv.airing.slice(0, 10)} mediaType="tv" />
                    </Suspense>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default TV