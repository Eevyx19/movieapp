import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchSkeletonCard = ({ cards = 20 }) => {
    return (
        <div >
            {Array.from({ length: cards }).map((_, index) => (
                    <div key={index} className="w-full flex sm:flex-col items-center gap -2">
                        <Skeleton className="w-full sm:w-fit aspect-2/3" />
                        <div className="w-full flex flex-col items-center px-2 py-2">
                            <Skeleton height={30} width="80%" />
                            <Skeleton height={20} width="50%" />
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default SearchSkeletonCard;