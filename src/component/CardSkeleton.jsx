import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = ({ cards = 12 }) => {
    return Array.from({ length: cards }).map((_, index) => (
        <div
            key={index}
            className="relative bg-gray-900 rounded-xl overflow-hidden animate-pulse">
            <Skeleton className="w-full aspect-2/3 bg-gray-700" />
            <div className="px-4 py-3 flex flex-col gap-2">
                <Skeleton className="h-4 bg-gray-700 rounded w-3/4" />
                <Skeleton className="h-4 bg-gray-700 rounded w-1/3" />
            </div>
        </div>
    ));
};

export default CardSkeleton;