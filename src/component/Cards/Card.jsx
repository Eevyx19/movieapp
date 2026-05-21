import { Link } from "react-router-dom";

const Card = ({ item, mediaType }) => {
    return (
        <Link
            to={`/${mediaType}/${item?.id}`}
            className="group relative rounded-xl overflow-hidden shadow-md shadow-black cursor-pointer transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/100 active:scale-95"
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
                className="w-full aspect-2/3 object-cover transition-transform duration-500 group-hover:scale-110"
                src={item?.poster_path
                    ? `${import.meta.env.VITE_API_IMAGE_POSTER}/${item?.poster_path}`
                    : "/empty-image.jpg"}
                alt={item.title}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100  transition-all duration-500"/>

            <div
                className="absolute bottom-0 left-0 right-0 text-white px-4 py-3 bg-linear-to-t from-black/90 to-transparent transition-all duration-500 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="line-clamp-1 font-semibold">
                    {item.title || item.name}
                </h3>
                <p className="text-sm text-gray-300">
                    {item?.release_date?.slice(0, 4) || item?.first_air_date?.slice(0, 4)}
                </p>
            </div>
        </Link>

    );
}
export default Card;