import {  useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";
import SkeletonLoading from "./SkeletonLoading";
const RecomendationCard = ({recomendation, loading, type}) => {
const sliderRef = useRef(null);

       const routeMap = {
        movie: "Movies",
        series: "Tv_Series",
       };
       const baseRoute = routeMap[type] || "Movies";

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

    return (
        <section className="main-container w-full">
            <div className="bg-gray-700 w-full px-4 py-4">
                <h1 className="text-2xl font-bold text-white py-2 mb-4">
                    Recomendation For You
                </h1>
                <div ref={sliderRef} className="flex flex-nowrap overflow-y-hidden overflow-x-scroll scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-2 py-2">
                    {loading && recomendation.length === 0 ? (
                        <SkeletonLoading cards={12} />
                    ) : (
                        recomendation?.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={`/${baseRoute}/Details/${item.id}`}
                                    className="group w-30 2xs:w-35 4xs:w-40 md:w-50 lg:w-60 shrink-0 relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer
                                               transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                                               hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50
                                               active:scale-95"
                                >
                                    <div className="absolute left-2 top-2 z-10">
                                        <p className="text-xs sm:text-sm text-yellow-400 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                                            ★{" "}
                                            <span className="text-white">
                                                {item?.vote_average?.toFixed(1)}
                                            </span>
                                        </p>
                                    </div>

                                    <img
                                        className="w-full aspect-[2/3] object-cover
                                                   transition-transform duration-500
                                                   group-hover:scale-110"
                                        src={`${import.meta.env.VITE_API_IMAGE_POSTER}/${item?.poster_path}`}
                                        alt={item.title || item.name}
                                    />
                                    <div
                                        className="absolute inset-0 bg-black/50
                                               opacity-0 group-hover:opacity-100
                                               transition-all duration-500"
                                    />

                                    <div
                                        className="absolute bottom-0 left-0 right-0 text-white px-4 py-3
                                               bg-gradient-to-t from-black/90 to-transparent
                                               transition-all duration-500
                                               translate-y-6 opacity-0
                                               group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <h3 className="line-clamp-1 font-semibold">
                                            {item.title || item.name}
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            {item?.release_date?.slice(0, 4) || item?.first_air_date?.slice(0, 4)}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })
                    )}

                </div>
            </div>
        </section>
        
    );
}

export default RecomendationCard;