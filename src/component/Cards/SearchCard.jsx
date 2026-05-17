import { Link } from "react-router";

const SearchCard = ({item}) => {
    return (
        <Link to={`/${item?.media_type}/${item?.id}`} key={item?.id} className="w-full flex sm:flex-col items-center gap-2 border-b sm:border-none border-gray-500 pb-4">
            <img className="sm:hidden w-1/3 object-contain object-center overflow-hidden" src={item?.poster_path
                ? `${import.meta.env.VITE_API_IMAGE_BACKDROP}/${item?.poster_path}` : "/empty-image.jpg"} alt="" />
            <img className="hidden sm:block w-fit object-contain object-center overflow-hidden" src={item?.backdrop_path 
            ? `${import.meta.env.VITE_API_IMAGE_BACKDROP}/${item?.backdrop_path}` : "/empty-image.jpg"} alt="" />
            <div className="w-full flex flex-col text-start px-2 py-2 text-white">
                <h3 className="text-lg py-2 line-clamp-2 font-bold">
                    {item?.title?.toUpperCase() || item?.name?.toUpperCase()}
                </h3>
                <p className="py-1 line-clamp-1">Release Date: {item?.release_date?.slice(0, 4) || item?.first_air_date?.slice(0, 4)}</p>
            </div>
        </Link>
    )
}
export default SearchCard;