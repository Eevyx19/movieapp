import { Link } from "react-router";

const CategoryCard = ({item, mediaType}) => {
    return (
        <Link className="h-auto text-white bg-gray-800 shadow-lg shadow-black overflow-hidden rounded-lg" to={`/${mediaType}/${item.id}`}>
            <img className="w-full" src={`${import.meta.env.VITE_API_IMAGE_BACKDROP}/${item?.poster_path}`} alt="" />
            <div className="description flex flex-col text-white items-center px-2 py-2">
                <p className="text-center line-clamp-1">{item?.name || item?.title}</p>
                <p className="text-sm text-gray-400">{item?.release_date?.slice(0, 4) || item?.first_air_date?.slice(0, 4)}</p>
            </div>
        </Link>
    )
}
export default CategoryCard;