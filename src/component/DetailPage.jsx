import { useEffect, useRef, useState } from "react";
import VideoDetail from "./VideoDetail";
import BackdropDetail from "./BackdropDetail";
import SimilarCard from "./SimilarCard";
import RecomendationCard from "./RecomendationCard";
import SkeletonLoading from "./SkeletonLoading";

const DetailPage = ({ details, recomendation, similar, credits, images, videos, loading, type }) => {
    const [pageLoading, setPageLoading] = useState(true)
    const sliderRef = useRef(null);
    const trailerRef = useRef(null);


    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        const wheelHandler = (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener("wheel", wheelHandler, { passive: false });

        return () => {
            el.removeEventListener("wheel", wheelHandler);
        };
    }, [])

    const scrollToTrailer = () => {
        trailerRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const getDate = (details) => {
        if (details?.release_date) {
            return `Release Date: ${details?.release_date}`;
        }
        if (details.first_air_date) {
            return `First Date: ${details?.first_air_date}`;
        }
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <main className="Detail w-full bg-black">
            <section className="relative flex flex-col pb-6">
                <div className="relative w-full h-72 md:h-96 animate-slide delay-300">
                    <img src={`${import.meta.env.VITE_API_IMAGE_BACKDROP}/${details?.backdrop_path}`} alt={details?.title || details?.name} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
                </div>
                <div className="poster-detail relative -mt-40 flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 md:gap-6 animate-slide delay-300">
                    <img src={`${import.meta.env.VITE_API_IMAGE_BACKDROP}/${details?.poster_path}`} alt="" className="w-48 md:w-72 rounded-xl shadow-2xl" />
                    <div className="description flex-1 min-w-0 py-6 flex flex-col gap-2">
                        <h1 className="title text-2xl sm:text-3xl md:text-5xl font-bold text-white">{details?.title || details?.name}</h1>
                        <div className="rating text-sm sm:text-base flex gap-2 delay-200">
                            <p className="text-yellow-500">
                                ★{" "}
                                <span className="text-white">
                                    {details?.vote_average?.toFixed(1)}
                                    <span className="text-gray-500">/10</span>
                                </span>
                            </p>
                            <span className="text-gray-400">•</span>
                            <p className="text-gray-300">
                                Status: {details?.status}
                            </p>
                            <span className="text-gray-400">•</span>
                            <p className="text-gray-300">
                                {details?.runtime
                                    ? `${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m`
                                    : `${details?.number_of_seasons} seasons`}
                            </p>
                        </div>
                        <div className="genre flex flex-wrap gap-1 pb-2">
                            {details?.genres?.map((g, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-700/70 px-3 py-1 rounded-full text-xs border border-white/10 backdrop-blur-sm"
                                >
                                    <p className="text-white">{g.name}</p>
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-300">
                            {getDate(details)}
                        </p>
                        <p className="tagline text-gray-400 text-xl">{details?.tagline}</p>
                        <p className="text-white text-2xl font-bold">Overview</p>
                        <p className="text-white text-justify">{details?.overview}</p>
                        <div>
                            <button onClick={scrollToTrailer} className="bg-blue-600 text-white px-2 py-2 rounded-full cursor-pointer">Watch Trailer</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col bg-black gap-4 px-4 md:px-16 py-4">
                <h1 className="text-white text-2xl font-bold">Top Cast</h1>
                <div ref={sliderRef} className="flex overflow-hidden overflow-x-auto scroll-smooth no-scrollbar gap-4">
                    {loading && credits.length === 0 ? (
                        <SkeletonLoading cards={10} />
                    ) : (
                    credits?.slice(0, 10)?.map((item, index) => (
                        <div key={index} className="cast-profil w-30 2xs:w-35 4xs:w-40 md:w-50 lg:w-60 shrink-0 overflow-hidden cursor-pointer">
                            <img
                                className="w-full rounded-xl "
                                src={`${import.meta.env.VITE_API_IMAGE_POSTER}/${item?.profile_path}`}
                                alt=""
                            />

                            <div className="mt-2 text-center w-full">
                                <h2 className="text-white text-xs sm:text-sm font-semibold truncate">
                                    {item?.name}
                                </h2>

                                <p className="text-gray-400 text-xs text-center whitespace-normal break-words leading-tight">
                                    {item?.character}
                                </p>
                            </div>
                        </div>
                    )))}
                </div>
            </section>
            <div ref={trailerRef}>
                <VideoDetail videos={videos} />
            </div>
            <BackdropDetail images={images} />
            <SimilarCard similar={similar} loading={loading} type={type} onClickCard={scrollToTop}/>
            <RecomendationCard recomendation={recomendation} loading={loading} type={type} onClickCard={scrollToTop}/>
        </main>
    )
}
export default DetailPage;