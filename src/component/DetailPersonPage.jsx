import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";
import { Link } from "react-router";

const DetailPersonPage = ({ detail, credits, social }) => {
    const sliderRef = useRef(null)
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
    }, []);

    const gender = (detail) => {
        if (detail?.gender === 1) return "Female";
        if (detail?.gender === 2) return "Male";

        return "Unknown";
    };

    return (
        <section className="container-detail w-full min-h-screen bg-gray-200">
            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 text-black px-4 md:px-10 pt-20 gap-4">
                <div className="person flex flex-col items-center md:items-center px-2 gap-4">
                    <img
                        className="w-40 sm:w-60 md:w-80 rounded shadow-xl animate-slide delay-100"
                        src={`${import.meta.env.VITE_API_IMAGE_POSTER}/${detail?.profile_path}`}
                        alt={detail?.name}
                    />
                    <h2 className="text-2xl font-bold md:hidden animate-slide delay-200">
                        {detail?.name}
                    </h2>
                    <h3 className="text-2xl font-bold w-full text-left animate-slide delay-300">
                        Personal Info
                    </h3>
                    <div className="w-full grid grid-cols-2 gap-6 text-left mb-10">
                        <div className="flex flex-col gap-4">
                            <div className="personal-info">
                                <p className="text-lg font-semibold animate-slide delay-400">
                                    Known For
                                </p>
                                <p className="text-sm text-gray-700 animate-slide delay-500">
                                    {detail?.known_for_department}
                                </p>
                            </div>
                            <div className="personal-info">
                                <p className="text-lg font-semibold animate-slide delay-500">
                                    Gender
                                </p>
                                <p className="text-sm text-gray-700 animate-slide delay-600">
                                    {gender(detail)}
                                </p>
                            </div>

                            <div className="personal-info">
                                <p className="text-lg font-semibold animate-slide delay-600">
                                    Birthday
                                </p>
                                <p className="text-sm text-gray-700 animate-slide delay-700">
                                    {detail?.birthday}
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-4">

                            <div className="personal-info">
                                <p className="text-lg font-semibold animate-slide delay-400">
                                    Place of Birth
                                </p>
                                <p className="text-sm text-gray-700 animate-slide delay-500">
                                    {detail?.place_of_birth}
                                </p>
                            </div>

                            <div className="personal-info">
                                <p className="text-lg font-semibold animate-slide delay-400">
                                    Social Media
                                </p>

                                <div className="flex gap-4 mt-2 animate-slide delay-500">

                                    {social?.instagram_id && (
                                        <a
                                            href={`https://instagram.com/${social.instagram_id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-pink-500 hover:text-pink-400 transition"
                                        >
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                size="lg"
                                            />
                                        </a>
                                    )}

                                    {social?.twitter_id && (
                                        <a
                                            href={`https://x.com/${social.twitter_id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-gray-700 transition"
                                        >
                                            <FontAwesomeIcon
                                                icon={faXTwitter}
                                                size="lg"
                                            />
                                        </a>
                                    )}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="biography flex flex-col gap-4">
                    <h1 className="hidden md:block text-4xl font-bold animate-slide">{detail?.name}</h1>
                    <h2 className="text-2xl font-bold animate-slide delay-200">
                        Biography
                    </h2>
                    <p className="text-gray-800 leading-7 text-justify animate-slide delay-300">
                        {detail?.biography || "No biography available."}
                    </p>

                    <h2 className="text-2xl font-bold animate-slide delay-400">Cast</h2>
                    <div ref={sliderRef} className="cast flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar animate-slide delay-500">
                        {[...credits]
                            .sort((a, b) => b.vote_average - a.vote_average)
                            .slice(0, 10)
                            .map((item, index) => (

                                <Link
                                    to={item?.media_type === "movie"
                                        ? `/Movies/Details/${item.id}`
                                        : `/Tv_Series/Details/${item.id}`
                                    }
                                    key={index}
                                    className="w-40 md:w-50 lg:w-60 shrink-0"
                                >
                                    <img
                                        className="w-full h-62 md:h-86 object-cover rounded-lg"
                                        src={`${import.meta.env.VITE_API_IMAGE_POSTER}/${item?.poster_path}`}
                                        alt={item?.title || item?.name}
                                    />

                                    <div className="mt-2 py-2">
                                        <p className="text-sm text-center font-semibold text-black line-clamp-2">
                                            {item?.title || item?.name}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DetailPersonPage;