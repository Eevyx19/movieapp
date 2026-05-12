import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";

const AiringTodaySeries = ({airingToday, loading}) => {
        const [activeIndex, setActiveIndex] = useState(null);
        const [selectId, setSelectId] = useState(null)
        const navigate = useNavigate();
    
        const handleClick = (id) => {
            console.log(id)
            setActiveIndex(id);
            navigate(`/Tv_Series/Details/${id}`)
        };
    
        return (
            <section className="main-container w-full">
                <div className="bg-gray-700 w-full px-4 py-4">
    
                    <h1 className="text-2xl font-bold text-white py-2 mb-4">
                       Airing Today Series
                    </h1>
    
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 items-stretch">
    
                        {loading && airingToday.length === 0 ? (
                            <CardSkeleton cards={12} />
                        ) : (
                            airingToday.map((item, index) => {
                                const isActive = activeIndex === index;
    
                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleClick(item.id)}
                                        className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer
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
                                            alt={item.name}
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
                                    </div>
                                );
                            })
                        )}
    
                    </div>
                </div>
            </section>
        );
}
export default AiringTodaySeries;