import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchSkeletonCard = ({ cards = 8 }) => {
    return (
        <div>
            <div className="w-2/3 sm:w-1/3 mb-4">
                <Skeleton className="h-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {Array.from({ length: cards }).map((_, index) => (
                    <div key={index} className="w-full flex-col items-center justify-center text-center mb-10">
                        <div className="w-full flex sm:flex-col">
                            <div className="block w-1/3 sm:w-full rounded-lg overflow-hidden">
                                <Skeleton className="aspect-2/3 sm:aspect-video w-full overflow-hidden" />
                            </div>
                            <div className="w-full flex flex-col justify-center px-2 py-2 text-white">
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-1/3" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SearchSkeletonCard;