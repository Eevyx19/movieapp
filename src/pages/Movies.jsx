import Navbar from "../component/Layout/Navbar";
import Footer from "../component/Layout/Footer"
import React, { Suspense } from "react";
import GridCardSkeleton from "../component/Loading/GridCardSkeleton";
import FlexCardSkeleton from "../component/Loading/FlexCardSkeleton";
import Loading from "../component/Loading/Loading";
import { motion } from "motion/react"
import useMedia from "../hooks/useMedia";
import { Link } from "react-router";
const GridCard = React.lazy(() => import("../component/LayoutCard/GridCard"));
const FlexCard = React.lazy(() => import("../component/LayoutCard/FlexCard"));
const Banner = React.lazy(() => import("../component/Layout/Banner"));

const Movies = () => {
    const { media, error } = useMedia();
    
    if (error) return <p>Error fetching data</p>

    return (
        <>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Banner trending={media.movie.trending.slice(0, 7)} />
            </Suspense>
            <section className="main-container w-full">
                {Object.entries(media.movie).slice(1, 2).map(([category, movie]) => (
                    <div key={category} className="flex flex-col bg-gray-700 w-full px-4 py-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-2xl font-bold text-white my-2">
                            {category.charAt(0).toUpperCase() + category.slice(1)} Movies
                        </motion.h1>
                        <Suspense fallback={<FlexCardSkeleton cards={10} />}>
                            <FlexCard data={movie.sort((a, b) => b.vote_average - a.vote_average).slice(0, 10)} mediaType="movie" />
                        </Suspense>
                        <Link
                            to={`/movie/category/${category}`}
                            className="text-white text-base text-center underline hover:text-blue-500 transition-colors pt-2">
                            More...
                        </Link>
                    </div>
                ))}
                {Object.entries(media.movie).slice(2, 4).map(([category, movies]) => (
                    <div key={category} className="flex flex-col bg-gray-700 w-full px-4 py-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-base md:text-2xl font-bold text-white py-2">
                            {category
                                .replace(/_/g, " ")
                                .replace(/\b\w/g, (char) => char.toUpperCase())} Movies
                        </motion.h1>
                        <Suspense fallback={<GridCardSkeleton cards={10} />}>
                            <GridCard data={movies.slice(0, 10)} mediaType="movie" />
                        </Suspense>
                        <Link
                            to={`/movie/category/${category}`}
                            className="text-white text-base text-center underline hover:text-blue-500 transition-colors pt-2">
                            More...
                        </Link>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    )
}
export default Movies;