import { Link } from "react-router";

const ViewCard = ({ item }) => {
    return (
            <Link
                to={`/person/${item.id}`} className="h-auto">
                <img src={`${import.meta.env.VITE_API_IMAGE_POSTER}/${item?.profile_path}` || "/empty-image.jpg"} alt={item?.name} className="rounded" />
                <div className="mt-2 text-center w-full">
                    <h2 className="text-white text-xs sm:text-sm font-semibold truncate">
                        {item?.name}
                    </h2>
                    <p className="text-gray-400 text-xs text-center whitespace-normal wrap-break-word leading-tight">
                        {item?.known_for_department}
                    </p>
                </div>
            </Link>
    )
}
export default ViewCard;