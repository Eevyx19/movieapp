import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router";

const BannerMovies = ({ trending }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const changeSlide = (newIndex) => {
        setCurrentIndex(newIndex);
        setLoaded(false);
    };

    const nextSlide = () => {
        changeSlide(
            currentIndex === trending.length - 1 ? 0 : currentIndex + 1
        );
    };

    const prevSlide = () => {
        changeSlide(
            currentIndex === 0 ? trending.length - 1 : currentIndex - 1
        );
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
        setTouchEndX(e.touches[0].clientX);
    }
    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    }
    const handleTouchEnd = () => {
        const distance = touchStartX - touchEndX;
        const minSwipeDistance = 60;

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        setTouchStartX(0);
        setTouchEndX(0);
    }

    useEffect(() => {
        if (trending.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === trending.length - 1 ? 0 : prev + 1
            );
            setLoaded(false);
        }, 7000);

        return () => clearInterval(interval);
    }, [trending.length]);

    const currentMovie = trending[currentIndex]

    return (
        <section className="movies-container w-full h-full mx-auto">
            <div onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="hero-section w-full h-[550px] md:h-[635px] overflow-hidden">
                <div className="content-hero relative w-full h-[550px] md:h-[635px]">
                    <div className="absolute inset-0 ">
                        <img
                            key={currentMovie?.backdrop_path}
                            onLoad={() => setLoaded(true)}
                            className={`w-full h-full object-cover object-center transition-all duration-300 ease-in-out ${loaded ? "opacity-100 blur-0" : "opacity-30 blur-sm"
                                }`}
                            src={`${import.meta.env.VITE_API_IMAGE_BACKDROP}/${currentMovie?.backdrop_path}`}
                            alt="banner"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent" />
                    <div key={currentIndex} className="relative w-full h-full px-6 md:px-12">
                        <div className="h-1/3 badge-hero flex items-center justify-between text-white pt-0">
                            <h3 className="bg-gray-800 px-3 py-1 rounded-full text-xs md:text-sm border border-white/10 backdrop-blur-sm  -pt-10">TRENDING</h3>
                        </div>
                        <div className="main-content w-full h-2/3 flex flex-col justify-center max-w-2xl">
                            <div>
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white animate-slide delay-200">
                                    {currentMovie?.title?.toUpperCase() || currentMovie?.name?.toUpperCase()}
                                </h1>

                                <div className="rating text-sm sm:text-base flex gap-2 animate-slide delay-200">
                                    <p className="text-yellow-500 pb-2">
                                        ★{" "}
                                        <span className="text-white">
                                            {currentMovie?.vote_average?.toFixed(1)}
                                        </span>
                                    </p>

                                    <span className="text-gray-400">•</span>

                                    <p className="text-gray-300">
                                        {currentMovie?.release_date?.slice(0, 4) ||
                                            currentMovie?.first_air_date?.slice(0, 4)}
                                    </p>

                                    <span className="text-gray-400">•</span>

                                    <p className="text-white">
                                        {currentMovie?.media_type?.toUpperCase()}
                                    </p>
                                </div>

                                <div className="flex flex-wrap text-white gap-2 animate-slide delay-300 my-2">
                                    {currentMovie?.genres?.map((genre, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-700/70 px-3 py-1 rounded-full text-xs border border-white/10 backdrop-blur-sm"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-sm md:text-base text-white line-clamp-2 animate-slide delay-400 mb-2">
                                    {currentMovie?.overview}
                                </p>
                            </div>

                            <Link
                                to={`/${currentMovie?.media_type}/${currentMovie?.id}`}
                                className="mt-4 bg-blue-600 text-white text-sm md:text-base px-4 py-2 rounded-xl w-fit animate-slide delay-500 cursor-pointer"
                            >
                                View details
                            </Link>
                        </div>
                    </div>
                    <div className="indicator absolute bottom-3 right-0 left-0 flex justify-center items-center gap-2 text-white">
                        {trending.map((_, i) => (
                            <button key={i} onClick={() => changeSlide(i)} className={`h-2 rounded-full transition-all duration-300 ease-in-out ${i === currentIndex ? "w-4 bg-white scale-110" : "w-2 bg-gray-400 scale-100"}`}></button>
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute hidden md:flex left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md border border-white/20 h-10 w-10 items-center justify-center text-white rounded-full"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute hidden md:flex right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md border border-white/20 h-10 w-10 items-center justify-center text-white rounded-full"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    )
}
export default BannerMovies;