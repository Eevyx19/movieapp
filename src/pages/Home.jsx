import Footer from "../component/Layout/Footer";
import Navbar from "../component/Layout/Navbar";
import useHome from "../hooks/useHome";
import React, {
    Suspense,
    useMemo,
    useRef,
    useState
} from "react";
import { motion } from "motion/react";
import FlexCardSkeleton from "../component/Loading/FlexCardSkeleton"
import GridCardSkeleton from "../component/Loading/GridCardSkeleton"
import useMedia from "../hooks/useMedia";
import { Link } from "react-router";
import Contact from "../component/Layout/Contact";
const FlexCard = React.lazy(() => import("../component/LayoutCard/FlexCard"))
const GridCard = React.lazy(() =>
    import("../component/LayoutCard/GridCard")
);

const Home = () => {
    const { allTrending, nowPlaying, onTheAir, error } = useHome();
    const { media, category } = useMedia();
    const [activeTab, setActiveTab] = useState("movie");
    const trendingRef = useRef();

    const scrollIntoTrending = () => {
        const top = trendingRef.current.offsetTop - 80;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    }

    if (error) return <p>Error fetching data</p>;

    return (
        <>
            <Navbar />

            <section className="main-container w-full">
                <div className="relative h-56 sm:h-64 md:h-78 lg:h-96">
                    <img
                        className="w-full h-full object-cover"
                        src="/banner.jpg"
                        alt="banner" />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex flex-col justify-center md:items-center px-4 sm:px-8 text-white">
                        <h1 className="text-2xl sm:text-4xl font-bold">
                            Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Movieapp</span>
                        </h1>
                        <p className="max-w-xl md:text-center text-sm sm:text-base mt-2 text-gray-200">
                            Discover trending movies, TV shows, and popular celebrities all in one place.
                        </p>
                        <button onClick={scrollIntoTrending} className="mt-4 w-fit bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">
                            Explore Now
                        </button>
                    </div>
                </div>
                <div className=" flex flex-col bg-gray-800 px-4 md:px-14 py-4">
                    <h1
                        ref={trendingRef}
                        className="text-md md:text-2xl font-bold text-white mb-4">Trending
                    </h1>
                    <div className="flex gap-4 border-b border-gray-700 mb-4">
                        {["movie", "tv"].map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)}
                                className={`py-2 px-4 transition-colors ${activeTab === tab
                                    ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400 hover:text-white"}`}>
                                {tab === "movie" ? "Movies" : "TV Shows"}
                            </button>
                        ))}
                    </div>
                    <Suspense fallback={<FlexCardSkeleton cards={10} />}>
                        <FlexCard
                            key={activeTab}
                            data={media[activeTab]?.trending?.slice(0, 10) || []}
                            mediaType={activeTab}
                        />
                    </Suspense>
                    <Link
                        to={`/${activeTab}/category/trending`}
                        className="text-white text-base text-center underline hover:text-blue-500 transition-colors pt-2">
                        More...
                    </Link>
                </div>

                <div className="bg-gray-700 w-full px-4 md:px-14 py-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-md md:text-2xl  font-bold text-white md:py-2 my-2">
                        Now Playing Movies
                    </motion.h1>

                    <Suspense fallback={<GridCardSkeleton cards={10} />}>
                        <GridCard
                            data={nowPlaying.slice(0, 10)}
                            mediaType="movie"
                        />
                    </Suspense>

                </div>
                <div className="bg-gray-800 w-full px-4 md:px-14 py-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-md md:text-2xl font-bold text-white md:py-2 my-2">
                        On The Air TV Series
                    </motion.h1>
                    <Suspense fallback={<GridCardSkeleton cards={10} />}>
                        <GridCard
                            data={onTheAir.slice(0, 10)}
                            mediaType="tv"
                        />
                    </Suspense>
                    <Contact />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;